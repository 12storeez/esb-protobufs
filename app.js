//1.get list files proto
const protoFilesPath = "./proto";
const tsFilesPath = "./typescript";
const generateFileName = "index.d.ts";
const fs = require("fs");
const parse = require("proto-parse");
const prettier = require("prettier");
const resultList = [];
const insertAfterObject = [];

run(protoFilesPath);

async function run(path) {
  const dir = await fs.promises.opendir(path);

  addLine('import {Observable} from "rxjs";', true);

  for await (const protoFile of dir) {
    readeProtoFile(protoFilesPath + "/" + protoFile.name);
  }

  writeFile(generateFileName);
  format(generateFileName);
}

//2. reade file using proto-parse
function readeProtoFile(filePath) {
  const objectList = parse(fs.readFileSync(filePath).toString());
  objectList.content.forEach((obj) => convertToLineAndAddToList(obj));
  addLine("}");
}

//3. process data
function convertToLineAndAddToList(obj) {
  if ("package" === obj.type) {
    addLine("export namespace " + obj.package + " {", true);
  } else if ("service" === obj.type) {
    addLine("export interface " + obj.name + " {", true);
    obj.content.forEach((method) => setMethod(method));
    addLine("}");
  } else if ("message" === obj.type) {
    addLine("export interface " + obj.name + " {", true);
    obj.content.forEach((method) => setField(method));
    addLine("}");
    addAfterObjectLines();
  }
}
function setMethod(obj) {
  addLine(
    "" +
      toLowerFirst(obj.name) +
      " (request: " +
      preparParamType(obj.param) +
      ", metadata? : any): Observable<" +
      obj.returns +
      ">;"
  );
}
function setField(obj) {
  if ("field" === obj.type) {
    const typeName = convertType(obj.typename);
    addLine("" + obj.name + ": " + typeName + makeArr(obj.repeated) + ";");
  } else if ("enum" === obj.type) {
    insertAfterObject.push(obj.type + " " + obj.name + "{\n");
    obj.content.forEach((enumElem) => setEnumField(enumElem));
    insertAfterObject.push("}");
  } else {
    console.error(obj.type + " - !field type is not unknown");
  }
}
function makeArr(repeated) {
  if (repeated) {
    return "[]";
  } else {
    return "";
  }
}
function setEnumField(obj) {
  insertAfterObject.push(obj.name + ",");
}
function addAfterObjectLines() {
  if (insertAfterObject.length > 0) {
    insertAfterObject.forEach((line) => addLine(line));
    insertAfterObject.splice(0, insertAfterObject.length);
  }
}

function convertType(typeName) {
  if ("int32" === typeName || "double" === typeName || "int64" === typeName) {
    return "number";
  } else if ("bool" === typeName) {
    return "boolean";
  } else {
    return typeName;
  }
}
function addLine(value, indent = false) {
  if (indent) {
    resultList.push("\n");
  }

  resultList.push(value + "\n");
}

function toLowerFirst(str) {
  return str.slice(0, 1).toLowerCase() + str.slice(1);
}

function preparParamType(param) {
  if (param.indexOf(".") >= 0) {
    return "any";
  }
  return param;
}
//4. write file

function writeFile(newFileName) {
  const filePath = tsFilesPath + "/" + newFileName;
  let fileDescriptor;

  try {
    fileDescriptor = fs.openSync(filePath, "w");
    resultList.forEach((line) => addLineToFile(fileDescriptor, line));
  } catch (err) {
    console.error("error");
  } finally {
    if (fileDescriptor !== undefined) fs.closeSync(fileDescriptor);
  }
}

function addLineToFile(fileDescriptor, line) {
  fs.appendFileSync(fileDescriptor, line, "utf8");
}

//5. using pretter
function format(newFileName) {
  const filePath = tsFilesPath + "/" + newFileName;
  const text = fs.readFileSync(filePath, "utf8");
  const formatted = prettier.format(text, { parser: "typescript" });
  fs.writeFileSync(filePath, formatted);
}
