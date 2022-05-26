const express = require('express');
require('dotenv').config();
const configExpress = require('./api/config/express');
const connectDB = require('./api/config/database');

const app = express();
connectDB();

configExpress(app);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
