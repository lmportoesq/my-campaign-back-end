const users = require('./api/users');
const leaders = require('./api/leaders');
const followers = require('./api/followers');
const rejecteds = require('./api/rejecteds');
const campaigns = require('./api/campaigns')
const authLocal = require('./auth/local');
const upload = require('./api/upload');

function routes(app){
  app.use('/api/users', users);
  app.use('/api/leaders', leaders);
  app.use('/api/followers', followers);
  app.use('/api/rejecteds', rejecteds);
  app.use('/api/campaigns', campaigns);
  app.use('/auth/local', authLocal);
  app.use('/api/upload', upload);
}
module.exports = routes;
