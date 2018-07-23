"use strict";

const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function(){
  console.log("server running on port " + server.address().port);
})
