const express = require('express');
require('dotenv').config();
require('./data/db');
const routes = require('./routes');

const app = express();
const server = app.listen(process.env.PORT, function(){
    console.log('Server running on port', server.address().port);
});

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, DELETE');
    next();
});

app.use('/api', routes);
app.use((req, res)=>{
    res.status(parseInt(process.env.STATUS_NOT_FOUND)).json({message: process.env.MSG_RESOURCE_NOT_FOUND});
})