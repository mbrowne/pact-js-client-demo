//This script starts the mock server and runs it in the background so it can be used while developing.

require('babel-register');
const Pact = require('pact');
const testDir = __dirname + '/../test/';

//We mock the global variables (PactConsumer() and run()) that the mocha test suite expects

global.PactConsumer = () => {};

global.run = () => {
    //Add the PACT interactions from our test file
    const {pactOpts: opts, interactions} = require(testDir + 'pact.spec.js');
    
    const provider = Pact({ consumer: opts.consumer, provider: opts.provider, port: opts.providerPort });
    const promises = interactions.map(interaction => provider.addInteraction(interaction));
    Promise.all(promises).then(() => {
        console.log('Mock server running on port ' + opts.providerPort);
    })
    .catch(e => {
       console.error(e); 
    });
};

//Starts the mock server
console.log('Starting server...');
require(testDir + 'specHelper.js');