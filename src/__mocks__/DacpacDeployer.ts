

export class DacpacDeployer {
    static constructorCalled:boolean = false;
    static deployCalled = false;
    

    constructor() {
        const run = require('../TestHelper.ts');
        console.log("constructure called");
        DacpacDeployer.constructorCalled = true;
        TestHelperConstructorCalled = true;
    }

    deploy(): void {
        DacpacDeployer.deployCalled = true;
        console.log("deploy called");
    }
}