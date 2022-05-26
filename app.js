const express = require('express');
require('dotenv').config();
const configExpress = require('./api/config/express');

const app = express();
configExpress(app);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
