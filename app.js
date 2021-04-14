//1.get list files proto
const fs = require("fs");
const parse = require("proto-parse");
const prettier = require("prettier");

const insertAfterObject = [];

class FileWriter {
    static tsFilesPath;// "./typescript";
    static generateFileName;// = "index.d.ts";
    static resultList;

    static init(tsFilesPath, generateFileName) {
        FileWriter.resultList = [];
        FileWriter.addLine('import {Observable} from "rxjs";', true);
        FileWriter.tsFilesPath = tsFilesPath;
        FileWriter.generateFileName = generateFileName;
    }

    static addLine(value, indent = false) {
        if (indent) {
            FileWriter.resultList.push("\n");
        }

        FileWriter.resultList.push(value + "\n");
    }

    static writeFile() {
        const filePath = FileWriter.generateFilePath();
        let fileDescriptor;

        try {
            fileDescriptor = fs.openSync(filePath, "w");
            FileWriter.resultList.forEach((line) => FileWriter.addLineToFile(fileDescriptor, line));
        } catch (err) {
            console.error("error");
        } finally {
            if (fileDescriptor !== undefined) fs.closeSync(fileDescriptor);
        }
    }

    static addLineToFile(fileDescriptor, line) {
        fs.appendFileSync(fileDescriptor, line, "utf8");
    }

    static generateFilePath() {
        return FileWriter.tsFilesPath + "/" + FileWriter.generateFileName;
    }
}

class ProtoReader {
    protoFilesPath;

    constructor(protoFilesPath) {
        this.protoFilesPath = protoFilesPath;
    }

    async getProtoFileName() {
        let protoList = {
            protoFile: [],
            protoDir: []
        };
        protoList.protoDir.push(this.protoFilesPath);

        while (protoList.protoDir.length > 0) {
            protoList = await this.readDir(protoList);
        }
        return protoList.protoFile;
    }

    async readDir(protoList) {
        const path = protoList.protoDir[0];
        protoList.protoDir.splice(0, 1);

        const dir = await fs.promises.opendir(path);
        for await (const protoFile of dir) {
            if (protoFile.isFile()) {
                protoList.protoFile.push(path + "/" + protoFile.name);
            } else {
                protoList.protoDir.push(path + "/" + protoFile.name);
            }
        }
        return protoList;
    }
}

run("./proto");

async function run(path) {

    FileWriter.init("./typescript", "index.d.ts");

    let reader = new ProtoReader(path);
    let protoFileNames = await reader.getProtoFileName();

    for await (const name of protoFileNames) {
        readeProtoFile(name);
    }

    FileWriter.writeFile();
    format(FileWriter.generateFilePath());
}

//2. reade file using proto-parse
function readeProtoFile(filePath) {
    let file = fs.readFileSync(filePath).toString();
    const regex = /\s+(option \(.+\).+(\n.+)+};)\s+/gm
    if (regex.test(file)) {
        file = file.replace(regex, '');
    }
    const objectList = parse(file);
    objectList.content.forEach((obj) => convertToLineAndAddToList(obj));
    FileWriter.addLine("}");
}

//3. process data
function convertToLineAndAddToList(obj) {
    const ignore_types = ["import", "option"];

    if (ignore_types.includes(obj.type)) {
        return null;
    }

    switch (obj.type) {
        case "package":
            FileWriter.addLine("export namespace " + obj.package + " {", true);
            break;
        case "service":
            FileWriter.addLine("export interface " + obj.name + " {", true);
            obj.content.forEach((method) => setMethod(method));
            FileWriter.addLine("}");
            break;
        case "message":
            FileWriter.addLine("export interface " + obj.name + " {", true);
            obj.content.forEach((method) => setField(method));
            FileWriter.addLine("}");
            addAfterObjectLines();
            break;
        case "enum":
            FileWriter.addLine("export enum " + obj.name + " {", true);
            obj.content.forEach((field) =>
                FileWriter.addLine(`${field.name} = ${field.val},`)
            );
            FileWriter.addLine("}");
            break;
        default:
            console.log(`operation for ${obj.type} not defined`);
    }
}

function setMethod(obj) {
    FileWriter.addLine(
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
        FileWriter.addLine("" + obj.name + ": " + typeName + makeArr(obj.repeated) + ";");
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
        insertAfterObject.forEach((line) => FileWriter.addLine(line));
        insertAfterObject.splice(0, insertAfterObject.length);
    }
}

function convertType(typeName) {
    if (
        "int32" === typeName ||
        "double" === typeName ||
        "int64" === typeName ||
        "float" === typeName
    ) {
        return "number";
    } else if ("bool" === typeName) {
        return "boolean";
    } else {
        return typeName;
    }
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

//5. using pretter
function format(filePath) {
    const text = fs.readFileSync(filePath, "utf8");
    const formatted = prettier.format(text, {parser: "typescript"});
    fs.writeFileSync(filePath, formatted);
}
