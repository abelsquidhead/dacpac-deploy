"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DacpacDeployer {
    constructor() {
        const run = require('../TestHelper.ts');
        console.log("constructure called");
        DacpacDeployer.constructorCalled = true;
        TestHelperConstructorCalled = true;
    }
    deploy() {
        DacpacDeployer.deployCalled = true;
        console.log("deploy called");
    }
}
DacpacDeployer.constructorCalled = false;
DacpacDeployer.deployCalled = false;
exports.DacpacDeployer = DacpacDeployer;
