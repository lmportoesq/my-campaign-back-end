const express = require('express');
require('dotenv').config();

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');
require('dotenv').config();

const app = express();

connectDB();
configExpress(app);
routes(app);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

module.exports = app;
