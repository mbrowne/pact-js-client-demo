const config = {};

if (!process.env.NODE_ENV) {
    console.warn('Warning: NODE_ENV is not defined');
}

let apiServerPort;
switch (process.env.NODE_ENV) {
    case 'dev':
        apiServerPort = 4000;
        break;
    case 'test':
        apiServerPort = 9000;
        break;
}

config.apiServerPort = apiServerPort;
config.apiBaseUrl = 'http://localhost:' + apiServerPort + '/api/';

export default config;