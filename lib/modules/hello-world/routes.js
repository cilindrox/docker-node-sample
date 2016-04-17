'use strict';

const Handlers = require('./handlers');
const Schema = require('./schema');


module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: Handlers.hello,
            validate: {
                options: {
                    stripUnknown: true
                }
            },
            response: {
                schema: Schema.hello,
                modify: true,
                options: {
                    stripUnknown: true
                }
            }
        }
    }
];
