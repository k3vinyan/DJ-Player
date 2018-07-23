"use strict";

require('dotenv').config();
const request = require('request');


//get users videos search
function getVideos(q){
  const url = process.env.SEARCH_URL + process.env.APIKEY + '&part=snippet&q=' + q;

  request(url, function(error, response, body){
    if(error){
      console.log('error: ', error);
      return('status Code: ', response && response.statusCode);
    } else {
      return body;
    }
  });
};
