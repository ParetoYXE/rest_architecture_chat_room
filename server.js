'use strict';
var express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json())

app.post('/',(req,res)=>{
	res.send("Main Index reached")
});


app.listen(3000);


