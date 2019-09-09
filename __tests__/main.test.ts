import { DacpacDeployer } from '../src/DacpacDeployer';
jest.mock('../src/DacpacDeployer');

describe('As a build/release pipeline, I need to deploy schema changes to a sql database using a dacpac so that I have an automated way to deploy my db schema changes', () => {

    
    it('Running the action creates a DacpacDeployer and calls deploy()', async () => {
        // const helper = require('../src/TestHelper.ts');
        // const run = require('../src/main.ts');
        // let val = DacpacDeployer;
        // console.log("val is: " + val);
        // console.log("constructor called: " + TestHelperConstructorCalled);
 //       expect(DacpacDeployer.constructorCalled).toBe(true);
    });

    it('If an uncaught error occures in the DacpacDeployer, the job is failed with the appropriate error message', async() => {

    });

    
});
