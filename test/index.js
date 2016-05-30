'use strict';

// Load modules

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');
const Info = require('../lib/modules/hello-world');

// Declare internals

const internals = {};


// Test shortcuts

const lab = exports.lab = Lab.script();
const it = lab.it;
const describe = lab.describe;
const expect = Code.expect;

describe('Hello World', () => {

    it('200 - GET /', (done) => {

        const server = new Hapi.Server();
        server.connection();

        server.register(Info, (err) => {

            expect(err).to.not.exist();

            const request = {
                method: 'GET',
                url: '/'
            };

            server.inject(request, (response) => {

                expect(response.statusCode).to.equal(200);
                expect(response.result).to.equal({ msg: 'hello world!' });
                done();
            });
        });
    });
});
