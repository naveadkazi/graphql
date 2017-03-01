import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean,
}
from 'graphql';
import "isomorphic-fetch";
import stockTypeFields from './stockType'

const BASE_URL = 'http://stg2.carwale.com/';

var stockPromise = null;

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

function fetchStocksAPI() {
  	return fetchResponseByURL('webapi/classified/stock/', 1);
}

const stockType = stockTypeFields;

const primaryCityType = new GraphQLObjectType({
	name: 'primaryCityType',
	description: 'Type for primary city object',
	fields: () => ({
		cityId: {
			type: GraphQLInt,
			resolve: primaryCity => primaryCity.CityId,
		},
		cityCount: {
			type: GraphQLInt,
			resolve: primaryCity => primaryCity.CityCount,
		},
		cityName: {
			type: GraphQLInt,
			resolve: primaryCity => primaryCity.CityName,
		},
	}),
});

const rootType = new GraphQLObjectType({
	name: 'rootType',
	description: '',
	fields: () => ({
		stocks: {
			type: new GraphQLList(stockType),
			description: 'Fetch all stocks',
			resolve: (stockApiResp, args, context) =>  stockApiResp.ResultData,
		},
		primaryCity: {
			type : primaryCityType,
			description: 'Get primary city',
			resolve: (stockApiResp, args, context) => stockApiResp.PrimaryCity,
		},
		lastNonFeaturedSlotRank: {
			type: GraphQLInt,
			description: 'Non Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.LastNonFeaturedSlotRank,
		},
		lastDealerFeaturedSlotRank: {
			type: GraphQLInt,
			description: 'Dealer Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.LastDealerFeaturedSlotRank,
		},
		lastIndividualFeaturedSlotRank: {
			type: GraphQLInt,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.LastIndividualFeaturedSlotRank,
		},
		nearbyCityId: {
			type: GraphQLInt,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.NearbyCityId,
		},
		nearbyCityIds: {
			type: GraphQLString,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.NearbyCityIds,
		},
		nearbyCityIdsStockCount: {
			type: GraphQLString,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.NearbyCityIdsStockCount,
		},
		totalStockCount: {
			type: GraphQLInt,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.TotalStockCount,
		},
		isAllStocksFetched: {
			type: GraphQLBoolean,
			description: 'Individual Featured car slot rank',
			resolve: (stockApiResp, args, context) => stockApiResp.IsAllStocksFetched,
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

const QueryType = new GraphQLObjectType({
	name: 'rootQuery',
	description: 'root query for search API',
	fields: () => ({
		stockApiResponse: {
			type: rootType,
			resolve: () =>  fetchStocksAPI(),
		},
	}),
});


export default new GraphQLSchema({
  query: QueryType,
});
