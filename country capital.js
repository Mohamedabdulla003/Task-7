const XMLHttpRequest = require("xhr2");
const xml = new XMLHttpRequest();
xml.open("GET",'https://restcountries.com/v3.1/all','true');
xml.send();
xml.onload=function(){
     var data = xml.response;
     var res = JSON.parse(data);
    //  console.log(res);
    res.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });

}