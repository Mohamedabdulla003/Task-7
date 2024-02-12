const XMLHttpRequest = require("xhr2");
const xml = new XMLHttpRequest();
xml.open ("GET",'https://restcountries.com/v3.1/all','true');

xml.send();

xml.onload = function(){
  var data = xml.response;
  var res = JSON.parse(data);
//   console.log(res);
  var total = res.reduce((pop,full)=>pop+full.population,0);
  console.log(total);
  console.log(res);
}