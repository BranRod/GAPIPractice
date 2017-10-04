'use strict';
const readline = require('readline');
const geoCoding = require('./geoCoding.js');
const rl = readline.createInterface(process.stdin, process.stdout);

let address = '';
let city = '';
let state = '';

let reqAddress = function(address,city,state){

  address = address.toString();
  city = city.toString();
  state = state.toString();
  let construct = (`${address},${city},${state}`);
  //console.log(construct);
  return construct;
};

rl.question('What is the street address?  ', function(answer){
  address = answer.toString();
  rl.prompt();
  rl.question('What is the city?  ' , function(theCity){
    city = theCity.toString();
    rl.prompt();

    rl.question('What is the state?  ', function(theState){
      state = theState.toString();
      rl.close();
    });

  });
  rl.on('close', function(){
  //console.log(reqAddress(address,city,state));
  // reqAdress(address,city,state);
    geoCoding(reqAddress(address, city, state));
  });

});
