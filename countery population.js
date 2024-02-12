const XMLHttpRequest = require("xhr2");
const xml = new XMLHttpRequest();
xml.open ("GET",'https://restcountries.com/v3.1/all','true');

xml.send();

xml.onload = function(){
  var data = xml.response;
  var res = JSON.parse(data);
  
    var population = res.filter((val)=>val.population<200000);
   
  var populationres =population.map((val)=>console.log(val.name.common));
  console.log(populationres);
}