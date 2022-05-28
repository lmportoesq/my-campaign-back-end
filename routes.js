const req = require('express/lib/request');
const users = require('./api/users');
const authLocal = require('./auth/local');

function routes(app){
   app.use('/api/users', users);
   app.use('/auth/local', authLocal);
}
module.exports = routes;
