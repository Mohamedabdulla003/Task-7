const XMLHttpRequest = require("xhr2");
const xml = new XMLHttpRequest();
xml.open ("GET",'https://restcountries.com/v3.1/all','true');

xml.send();

xml.onload = function(){
  var data = xml.response;
  var res = JSON.parse(data);
  var currency = res.filter((value)=>value.currencies&&value.currencies.USD);
  console.log(currency);
  currency.forEach((value)=>console.log(value.name.common));
    
  }