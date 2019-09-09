# DacpacDeployer

This action takes in a dacpac and a connection string and deploys schema changes to the sql server database desribed in the connection string.

## Usage

```yml
name: Deploy Database Workflow

on: [push]

jobs:
  ...
  
  # deploy new database schema using dacpac
  deployDB:
      needs: buildDatabase
      runs-on: windows-latest
      steps:
      # download build artifacts
      - name: download build artifacts
        uses: actions/download-artifact@master
        with: 
          name: db

      # deploy dacpac calling my dacpac-deploy task
      - name: update database schema using dacpac deploy action
        uses: abelsquidhead/dacpac-deploy@master
        with:
          connectionString: ${{ secrets.DATABASE_CONNECTION_STRING }}
          dacpac: 'db\MercuryHealthDB.dacpac'
          additionalArguments: '/p:BlockOnPossibleDataLoss=False'
```

See the walkthrough located [here](https://github.com/actions/toolkit/blob/master/docs/javascript-action.md).

In addition to walking your through how to create an action, it also provides strategies for versioning, releasing and referencing your actions.
