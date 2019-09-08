import * as core from '@actions/core';
import * as exec from '@actions/exec';
    
export class DacpacDeployer {
    connectionString: string;
    dacpac: string;
    additionalArguments: string;

    constructor() {
        // get all the inputs
        this.connectionString= core.getInput('connectionString');
        this.dacpac = core.getInput('dacpac');
        this.additionalArguments = core.getInput('additionalArguments');

    }

    deploy():void {
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

        exec.exec("sqlpackage.exe /Action:Publish /SourceFile:\"" + workspacePath + "\\" + this.dacpac + "\" /TargetConnectionString:" + this.connectionString + "\" " + this.additionalArguments);
        console.log("done updating database");
    }
}