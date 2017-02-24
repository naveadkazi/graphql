'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

require('isomorphic-fetch');

var _stockType = require('./stockType');

var _stockType2 = _interopRequireDefault(_stockType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'http://stg2.carwale.com/';

function setHeaders(apiType) {
	var myHeaders = new Headers();
	if (apiType == 1) myHeaders.append("SourceId", "43");else if (apiType == 2) {
		myHeaders.append("SourceId", "83");
		myHeaders.append("cwk", "CWIOSTest");
	}
	return myHeaders;
}

function fetchResponseByURL(relativeURL, apiType) {
	var myHeaders = setHeaders(apiType);
	return fetch('' + BASE_URL + relativeURL, { headers: myHeaders }).then(function (res) {
		return res.json();
	});
}

function fetchStocks() {
	return fetchResponseByURL('webapi/classified/stock/', 1).then(function (json) {
		return json.ResultData;
	});
}

var stockType = _stockType2.default;

var QueryType = new _graphql.GraphQLObjectType({
	name: 'rootQuery',
	description: 'root query for search',
	fields: function fields() {
		return {
			stocks: {
				type: new _graphql.GraphQLList(stockType),
				description: 'Fetch all stocks',
				resolve: function resolve() {
					return fetchStocks();
				}
			},
			stock: {
				type: stockType,
				args: {
					profileId: {
						type: _graphql.GraphQLString
					}
				},
				resolve: function resolve(root, args) {
					return fetchStockByURL('/api/stocks/' + args.profileId + '/');
				}
			}
		};
	}
});

exports.default = new _graphql.GraphQLSchema({
	query: QueryType
});