 const XMLHttpRequest = require("xhr2");
const xml = new XMLHttpRequest();
xml.open ("GET",'https://restcountries.com/v3.1/all','true');

xml.send();

xml.onload = function(){
  var data = xml.response;
  var res = JSON.parse(data);
   var continent=res.filter((val)=>val.continents=="Asia")
   var continentres=continent.map((country)=>console.log(country.name.common))
    }


