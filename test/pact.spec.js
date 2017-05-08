/**
 * PACT consumer contract defined using [pact-js-mocha](https://github.com/pact-foundation/pact-js-mocha)
 */

import pactMocha from 'pact-js-mocha';
import {expect} from 'chai';
import expectedBodies from './expected-response-bodies';

import App from '../src/App';
import config from '../src/config';
const {apiServerPort: mockServerPort, apiBaseUrl} = config;

const testProps = {};
const app = new App(testProps);

export const pactOpts = {
    consumer: 'CMS-admin client',    // the name of your consumer
    provider: 'CMS-admin provider',  // the name of your Provider
    providerPort: mockServerPort   // the port on which the provider runs
};

export const interactions = [
    {
        state: 'Has menu data',
        uponReceiving: 'a request for menu data',
        withRequest: {
            method: 'GET',
            path: '/api/v1/entities/menu/all'
        },
        willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: expectedBodies.allMenus
        }
    }
];

PactConsumer(pactOpts, () => {
    addInteractions(interactions);

    verify('an array of menus is returned', app.fetchMenus, (result, done) => {
        expect(result).to.eql( expectedBodies.allMenus );
        done();
    });
    
    // writes the pact file and clears all interactions
    finalizePact();
});


