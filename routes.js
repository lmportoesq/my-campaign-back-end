const req = require('express/lib/request');
const users = require('./api/users');
const leaders = require('./api/leaders');
const followers = require('./api/followers');
campaigns = require('./api/campaigns')
const authLocal = require('./auth/local');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/leaders', leaders);
  app.use('/api/followers', followers);
  app.use('/api/campaigns', campaigns);
  app.use('/auth/local', authLocal);
}
module.exports = routes;
