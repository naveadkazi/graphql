import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString
}
from 'graphql';
import "isomorphic-fetch";
import stockTypeFields from './stockType'

const BASE_URL = 'http://stg2.carwale.com/';

function setHeaders(apiType){
	var myHeaders = new Headers();
	if(apiType == 1)
		myHeaders.append("SourceId", "43");
	else if(apiType == 2){
		myHeaders.append("SourceId", "83");
		myHeaders.append("cwk", "CWIOSTest");
	}
	return myHeaders;
}

function fetchResponseByURL(relativeURL, apiType) {
	var myHeaders = setHeaders(apiType);
	return fetch(`${BASE_URL}${relativeURL}`,{headers: myHeaders}).then(res => res.json());
}

function fetchStocks() {
  return fetchResponseByURL('webapi/classified/stock/', 1).then(json => json.ResultData);
}

const stockType = stockTypeFields;

const QueryType = new GraphQLObjectType({
	name: 'rootQuery',
	description: 'root query for search',
	fields : () => ({
		stocks: {
			type: new GraphQLList(stockType),
			description: 'Fetch all stocks',
			resolve: () =>  fetchStocks(),
		},
		stock:{
			type: stockType,
			args: {
				profileId: {
					type: GraphQLString
				},
			},
			resolve: (root,args) => fetchStockByURL(`/api/stocks/${args.profileId}/`) ,
		},
	}),
});


export default new GraphQLSchema({
  query: QueryType,
});
