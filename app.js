
require('dotenv').config();
const express = require('express');
const app = express();


app.get('/',(req,res)=>{
 res.send('hello from server')
});
module.exports = app;
