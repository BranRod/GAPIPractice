'use strict';

//  form submit
$(document).ready(function(){
  $('#formSubmit').on('click', function(){

    let address = $('#addressField').val();
    let city = $('#cityField').val();
    let state = $('#stateField').val();

    if(address&&city&&state){
      console.log(reqAddress(address,city,state));
    };
  });
});

let reqAddress = function(address,city,state){
  address = address.toString();
  city = city.toString();
  state = state.toString();
  let construct = (`${address},${city},${state}`);
  console.log(construct);
  return construct;
};
