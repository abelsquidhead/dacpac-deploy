"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
class DacpacDeployer {
    constructor() {
        // get all the inputs
        this.connectionString = core.getInput('connectionString');
        this.dacpac = core.getInput('dacpac');
        this.additionalArguments = core.getInput('additionalArguments');
    }
    deploy() {
        return __awaiter(this, void 0, void 0, function* () {
            // add sql package.exe to path
            core.addPath('C:\\Program Files (x86)\\Microsoft Visual Studio\\2019\\Enterprise\\Common7\\IDE\\Extensions\\Microsoft\\SQLDB\\DAC\\150');
            // call sql package.exe
            console.log("updating database...");
            console.log("connectionString: " + this.connectionString);
            console.log("dacpac: " + this.dacpac);
            console.log("additionalArguments: " + this.additionalArguments);
            let workspacePath = process.env.GITHUB_WORKSPACE;
            console.log("workspace: " + workspacePath);
            console.log("");
            // call sql package.exe
            let commandString = "sqlpackage.exe /Action:Publish /SourceFile:\"" + workspacePath + "\\" + this.dacpac + "\" /TargetConnectionString:\"" + this.connectionString + "\" " + this.additionalArguments;
            console.log("command string: " + commandString);
            exec.exec(commandString)
                .then(r => {
                console.log("done updating database");
            })
                .catch(e => {
                core.error("Could not deploy dacpac:");
                core.error(e);
                console.log("done updating database");
            });
        });
    }
}
exports.DacpacDeployer = DacpacDeployer;
