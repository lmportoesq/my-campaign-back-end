const req = require('express/lib/request');
const users = require('./api/users');
const leaders = require('./api/leaders');
campaigns = require('./api/campaigns')
const authLocal = require('./auth/local');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/leaders', leaders);
  app.use('/api/campaigns', campaigns);
  app.use('/auth/local', authLocal);
}
module.exports = routes;
