'use strict';
const request = require('request');
const elevation = require('./api');

var geoCoding = function (address){
  let url = 'https://maps.googleapis.com/maps/api/geocode/json';
  let key = 'AIzaSyCa2TGEjT1hKhRgEdw79nQlOIYqlHC7aiA';

  process.stdout.write(`\nFinding elevation for: ${address}\n\n`);
  let requestUrl = url+'?'+'address='+address+'&key='+key;

  request.get(requestUrl, (error, response, body) => {
    let json = JSON.parse(body);
    let lat = json.results[0].geometry.location.lat.toString();
    let long = json.results[0].geometry.location.lng.toString();
    // console.log('latitude: ',lat);
    // console.log('longitude: ',long);
    elevation(lat,long);
  });

};

module.exports = geoCoding;
