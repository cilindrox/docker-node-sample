'use strict';

const Routes = require('./routes');


exports.register = (server, options, next) => {

    server.route(Routes);

    return next();
};


exports.register.attributes = {
    name: 'hello-world'
};
