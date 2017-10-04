'use strict';
const request = require('request');
const MetersToFeet = require('meters-to-feet');
//const exec = require('child_process').exec;
const apiKey = 'AIzaSyCYP87-CGNFBuT9Gq19lr87fVoajpgLvCc';
let mtf = new MetersToFeet();

let elevation = function(lat, long){
  const url = (`https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${long}&key=${apiKey}`);

  request.get(url, (error, response, body) => {
    let json = JSON.parse(body);
    let elevation = mtf.get(json.results[0].elevation);
    elevation.toString();
    process.stdout.write(`\n${elevation} ft\n\n`);
  //exec(`open ${url}`);

  });
};

module.exports = elevation;
