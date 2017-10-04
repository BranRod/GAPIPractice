'use strict';
const express = require('express');
const app = express();

app.get('/',function(req,res){
  res.sendfile('index.html');
});
app.get('/scripts.js',function(req,res){
  res.sendfile('scripts.js');
});
app.get('/style.css',function(req,res){
  res.sendfile('style.css');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
