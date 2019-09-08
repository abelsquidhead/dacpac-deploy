"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
class DacpacDeployer {
    constructor() {
        // get all the inputs
        this.connectionString = core.getInput('connectionString');
        this.dacpac = core.getInput('dacpac');
        this.additionalArguments = core.getInput('additionalArguments');
    }
    deploy() {
        // add sql package.exe to path
        core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');
        // call sql package.exe
        console.log("updating database...");
        console.log("connectionString: " + this.connectionString);
        console.log("dacpac: " + this.dacpac);
        console.log("additionalArguments: " + this.additionalArguments);
        console.log("");
        console.log("getting working directory...");
        let workspacePath = process.env.GITHUB_WORKSPACE;
        console.log("workspace: " + workspacePath);
        console.log("");
        //        exec.exec("sqlpackage.exe /Action:Publish /SourceFile:\"" + this.dacpac + "\" /TargetConnectionString:\"" + this.connectionString + "\" " + this.additionalArguments);
        console.log("done updating database");
    }
}
exports.DacpacDeployer = DacpacDeployer;
