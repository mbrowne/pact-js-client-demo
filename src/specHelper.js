import path from 'path';
import wrapper from '@pact-foundation/pact-node';
import config from './src/config';

// create PACT mock server
const mockServer = wrapper.createServer({
  //apiServerPort is set to the mock server port when running tests thanks to NODE_ENV=test
  port: config.apiServerPort,  
  log: path.resolve(process.cwd(), 'logs', 'mockserver-ui.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2
});

// start the mock server
mockServer.start().then(function () {
  // runs Mocha's test suite
  run();
  console.log('server running')
});