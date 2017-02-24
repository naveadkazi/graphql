var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: '10.0.0.49:9201',
  //log: 'trace'
});

var newA = [];
client.search({
  index: 'stagingstock_mysql',
  type: 'item',
  body:{
	  query:{
		  match:{
			  profileId: 'D1007126'
		  }
	  }
  }
},read);

function read(err, resp){
	var hits = resp.hits.hits;
	newA = hits.map(function (item, index){
		return JSON.stringify({profileid :item._source.profileId});
	});
	
	console.log(newA);
}


