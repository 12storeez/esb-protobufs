import { readdir, readFile, writeFile } from "fs/promises";
import * as ProtoParser from "proto-parser";
import { format } from "prettier";
import { NamespaceBase, ProtoDocument, SyntaxType } from "proto-parser";

async function findAllProtoFilesRecursive(
  path: string,
  filesList: string[] = []
): Promise<string[]> {
  try {
    const files = await readdir(path, { withFileTypes: true });
    const results = await Promise.all(
      files
        .filter((file) => file.isDirectory())
        .map((file) => findAllProtoFilesRecursive(`${path}/${file.name}`))
    );
    return [
      ...filesList,
      ...files
        .filter((file) => file.isFile())
        .map(({ name }) => `${path}/${name}`),
      ...results.reduce((a, c) => [...a, ...c], []),
    ];
  } catch (err) {
    console.error(err);
  }
}

async function readAndParseProtoFile(path) {
  const fileText = await readFile(path, { encoding: "utf-8" });
  const result = ProtoParser.parse(fileText, {
    weakResolve: true,
    toJson: true,
  }) as ProtoDocument;
  return result.root.nested;
}

async function combineAllInOneSet(filePaths: string[]) {
  const buffer = new Map();
  const nestedProtoDefinitions = await Promise.all(
    filePaths.map((path) => readAndParseProtoFile(path))
  );
  nestedProtoDefinitions.forEach((protoRoot) => {
    Object.keys(protoRoot).forEach((key) => {
      buffer.set(
        key,
        buffer.has(key)
          ? { ...buffer.get(key), ...protoRoot[key].nested }
          : protoRoot[key].nested
      );
    });
  });
  return buffer;
}

function createTsFileForNamespace(namespace, json) {
  return `export namespace ${namespace} {
        ${Object.keys(json)
          .map((key) => convertJSONObjectToTSObject(json[key]))
          .join("")}
      }`;
}

function convertJSONObjectToTSObject(json: NamespaceBase) {
  switch (json.syntaxType) {
    case SyntaxType.ServiceDefinition:
      return buildForService(json);
    case SyntaxType.MessageDefinition:
      return buildForMessage(json);
    case SyntaxType.EnumDefinition:
      return buildForEnum(json);
    default:
      console.warn(
        `definition has ${json.syntaxType}. Passed, need to implement`
      );
  }
}

function toLowerCaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function buildForService(json) {
  function buildMethod(method) {
    return `${toLowerCaseFirstLetter(method.name)}(request: ${
      method.requestType.value
    }, metadata?: any): Observable<${method.responseType.value}>`;
  }
  return `export interface ${json.name} {
    ${Object.keys(json.methods)
      .map((key) => buildMethod(json.methods[key]))
      .join("\n")}
  }`;
}
function buildForMessage(json) {
  function typeMap(type) {
    return (
      {
        ["double"]: "number",
        ["float"]: "number",
        ["int32"]: "number",
        ["int64"]: "number",
        ["uint32"]: "number",
        ["uint64"]: "number",
        ["sint32"]: "number",
        ["sint64"]: "number",
        ["fixed32"]: "number",
        ["fixed64"]: "number",
        ["sfixed32"]: "number",
        ["sfixed64"]: "number",
        ["bool"]: "boolean",
        ["string"]: "string",
        ["bytes"]: "Buffer",
      }[type.value] ?? type.value
    );
  }

  return `export interface ${json.name} {
    ${Object.keys(json.fields)
      .map(
        (field) =>
          `${field}${json.fields[field].optional ? "?" : ""}: ${typeMap(
            json.fields[field].type
          )}${json.fields[field].repeated ? "[]" : ""}`
      )
      .join("\n")}
  }`;
}
function buildForEnum(json) {
  return `export enum ${json.name} {
    ${Object.keys(json.values)
      .map((key) => `${key} = ${json.values[key]}`)
      .join(",\n")},
    }`;
}

async function main() {
  const filePaths = await findAllProtoFilesRecursive("./proto");
  const allInOne = await combineAllInOneSet(filePaths);

  let data = `
  import {Observable} from "rxjs";
      
  export namespace google.protobuf {
     export interface Empty {}
  }`;

  allInOne.forEach((value, key) => {
    data += createTsFileForNamespace(key, value);
  });
  const formatted = format(data, { parser: "typescript" });
  await writeFile(`./typescript/index.d.ts`, formatted, "utf-8");
}

main().then();

/**
 *
 * 1) create buffer for packages
 * 2) read proto files and merge to buffer
 * 3) take buffer and convert from json to ts file
 * 4) build several files for package
 */
