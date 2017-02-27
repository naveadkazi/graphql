var request = require("request-promise");
var express = require('express');


var app = express();

app.get('/', function (req, res) {
  var start = new Date();
  call().then(function(resp){
    console.log('Request took:', new Date() - start, 'ms');
    res.send(resp);


  });

})

app.listen(2000, function () {
  console.log('Example app listening on port 2000!')
})

function call(){
  var options = { method: 'GET',
    uri: 'http://stg2.carwale.com/webapi/Classified/stock/',
    headers:
     { sourceid: '43' },json: true };

    return request(options);

  /*request(options, function (error, response, body) {
    if (error) throw new Error(error);
    return body;
    //console.log(body);
  });*/
}
