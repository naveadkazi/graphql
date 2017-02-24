var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    var res = xhr.response;
  	var content = document.getElementById('content');
  	content.innerHTML = JSON.stringify(res);
    var t1 = performance.now();
    console.log('Took', (t1 - t0).toFixed(4), 'milliseconds');
  }
});

xhr.open("GET", "http://stg2.carwale.com/webapi/Classified/stock/");
xhr.setRequestHeader("sourceid", "43");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.withCredentials = true;
var t0 = performance.now();
xhr.send(data);
