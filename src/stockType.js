import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean,
	GraphQLFloat
}
from 'graphql';

function fields(){
  return {
		profileId: {
			type: GraphQLString,
			resolve: stock => stock.ProfileId,
		},
		priceFormatted: {
			type: GraphQLString,
			resolve: stock => stock.Price,
		},
		carName: {
			type: GraphQLString,
			resolve: stock => stock.CarName,
		},
		makeId: {
			type: GraphQLInt,
			resolve: stock => stock.MakeId,
		},
		rootId: {
			type: GraphQLInt,
			resolve: stock => stock.RootId,
		},
		profileUrl: {
			type: GraphQLString,
			resolve: stock => stock.Url,
		},
		frontImagePath:{
			type: GraphQLString,
			resolve: stock => stock.FrontImagePath,
		},
		inquiryId:{
			type: GraphQLInt,
			resolve: stock => stock.InquiryId,
		},
		seller:{
			type: GraphQLString,
			resolve: stock => stock.Seller,
		},
		photoCount:{
			type: GraphQLInt,
			resolve: stock => stock.PhotoCount,
		},
		priceNumeric:{
			type: GraphQLInt,
			resolve: stock => stock.PriceNumeric,
		},
		kilometersFormatted:{
			type: GraphQLString,
			resolve: stock => stock.Km,
		},
		kilometersNumeric:{
			type: GraphQLInt,
			resolve: stock => stock.KmNumeric,
		},
		makeYear:{
			type: GraphQLString,
			resolve: stock => stock.MakeYear,
		},
		makeName:{
			type: GraphQLString,
			resolve: stock => stock.MakeName,
		},
		rootName:{
			type: GraphQLString,
			resolve: stock => stock.RootName,
		},
		modelName:{
			type: GraphQLString,
			resolve: stock => stock.ModelName,
		},
		versionName:{
			type: GraphQLString,
			resolve: stock => stock.VersionName,
		},
		maskingName:{
			type: GraphQLString,
			resolve: stock => stock.MaskingName,
		},
		color:{
			type: GraphQLString,
			resolve: stock => stock.Color,
		},
		fuel:{
			type: GraphQLString,
			resolve: stock => stock.Fuel,
		},
		additionalFuel:{
			type: GraphQLString,
			resolve: stock => stock.AdditionalFuel,
		},
		gearBox:{
			type: GraphQLString,
			resolve: stock => stock.GearBox,
		},
		sellerNote:{
			type: GraphQLString,
			resolve: stock => stock.SellerNote,
		},
		videoCount:{
			type: GraphQLInt,
			resolve: stock => stock.VideoCount,
		},
		offerStartDate:{
			type: GraphQLString,
			resolve: stock => stock.OfferStartDate,
		},
		offerEndDate:{
			type: GraphQLString,
			resolve: stock => stock.OfferEndDate,
		},
		lastUpdatedOn:{
			type: GraphQLString,
			resolve: stock => stock.LastUpdatedOn,
		},
		areaName:{
			type: GraphQLString,
			resolve: stock => stock.AreaName,
		},
		cityName:{
			type: GraphQLString,
			resolve: stock => stock.CityName,
		},
		cityId:{
			type: GraphQLInt,
			resolve: stock => stock.CityId,
		},
		stateName:{
			type: GraphQLString,
			resolve: stock => stock.StateName,
		},
		CertifiedLogoUrl:{
			type: GraphQLString,
			resolve: stock => stock.CertifiedLogoUrl,
		},
		numberOfOwners:{
			type: GraphQLString,
			resolve: stock => stock.NoOfOwners,
		},
		isPremium:{
			type: GraphQLBoolean,
			resolve: stock => stock.IsPremium,
		},
		isHotDeal:{
			type: GraphQLBoolean,
			resolve: stock => stock.IsHotDeal,
		},
		emi:{
			type: GraphQLInt,
			resolve: stock => stock.Emi,
		},
		absureWarranty:{
			type: GraphQLString,
			resolve: stock => stock.AbsureWarranty,
		},
		absureScore:{
			type: GraphQLInt,
			resolve: stock => stock.AbsureScore,
		},
		emiUrl:{
			type: GraphQLString,
			resolve: stock => stock.EmiUrl,
		},
		makeMapping:{
			type: GraphQLString,
			resolve: stock => stock.MakeMapping,
		},
		rootMapping:{
			type: GraphQLString,
			resolve: stock => stock.RootMapping,
		},
		apiFlag:{
			type: GraphQLString,
			resolve: stock => stock.ApiFlag,
		},
		sortScore:{
			type: GraphQLFloat,
			resolve: stock => stock.SortScore,
		},
		maskingNumber:{
			type: GraphQLString,
			resolve: stock => stock.MaskingNumber,
		},
		sellerName:{
			type: GraphQLString,
			resolve: stock => stock.SellerName,
		},
		sellerContact:{
			type: GraphQLString,
			resolve: stock => stock.SellerContact,
		},
		hostUrl:{
			type: GraphQLString,
			resolve: stock => stock.HostUrl,
		},
		originalImgPath:{
			type: GraphQLString,
			resolve: stock => stock.OriginalImgPath,
		},
		certificationId:{
			type: GraphQLInt,
			resolve: stock => stock.CertificationId,
		},
		inspectionText:{
			type: GraphQLString,
			resolve: stock => stock.InspectionText,
		},
		hasWarranty:{
			type: GraphQLBoolean,
			resolve: stock => stock.HasWarranty,
		},
		dealerQuickBloxId:{
			type: GraphQLInt,
			resolve: stock => stock.DealerQuickBloxId,
		},
		subSegmentID:{
			type: GraphQLInt,
			resolve: stock => stock.SubSegmentID,
		},
		versionSubSegmentID:{
			type: GraphQLInt,
			resolve: stock => stock.VersionSubSegmentID,
		},
		bodyStyleId:{
			type: GraphQLInt,
			resolve: stock => stock.BodyStyleId,
		},
		nearByCityStripId:{
			type: GraphQLInt,
			resolve: stock => stock.NBCityStripId,
		},
		deliveryText:{
			type: GraphQLString,
			resolve: stock => stock.DeliveryText,
		},
		deliveryCityId:{
			type: GraphQLInt,
			resolve: stock => stock.DeliveryCity,
		},
		nearbyCityText:{
			type: GraphQLString,
			resolve: stock => stock.NearbyCityText,
		},
		isPremiumPackage:{
			type: GraphQLBoolean,
			resolve: stock => stock.IsPremiumPackage,
		},
		isNearbyCityListing:{
			type: GraphQLBoolean,
			resolve: stock => stock.IsNearbyCityListing,
		},
		certificationScore:{
			type: GraphQLFloat,
			resolve: stock => stock.CertificationScore,
		},
		/*recommendation: {
			type: new GraphQLList(stockType),
			resolve: stock => //Call recommendation API
		},*/
	}
}


export default new GraphQLObjectType({
	name: 'stock',
	description: 'Type of stock',
	fields: fields(),
});
