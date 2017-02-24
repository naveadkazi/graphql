'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

function fields() {
	return {
		profileId: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.ProfileId;
			}
		},
		priceFormatted: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Price;
			}
		},
		carName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.CarName;
			}
		},
		makeId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.MakeId;
			}
		},
		rootId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.RootId;
			}
		},
		profileUrl: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Url;
			}
		},
		frontImagePath: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.FrontImagePath;
			}
		},
		inquiryId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.InquiryId;
			}
		},
		seller: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Seller;
			}
		},
		photoCount: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.PhotoCount;
			}
		},
		priceNumeric: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.PriceNumeric;
			}
		},
		kilometersFormatted: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Km;
			}
		},
		kilometersNumeric: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.KmNumeric;
			}
		},
		makeYear: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.MakeYear;
			}
		},
		makeName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.MakeName;
			}
		},
		rootName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.RootName;
			}
		},
		modelName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.ModelName;
			}
		},
		versionName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.VersionName;
			}
		},
		maskingName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.MaskingName;
			}
		},
		color: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Color;
			}
		},
		fuel: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.Fuel;
			}
		},
		additionalFuel: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.AdditionalFuel;
			}
		},
		gearBox: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.GearBox;
			}
		},
		sellerNote: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.SellerNote;
			}
		},
		videoCount: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.VideoCount;
			}
		},
		offerStartDate: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.OfferStartDate;
			}
		},
		offerEndDate: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.OfferEndDate;
			}
		},
		lastUpdatedOn: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.LastUpdatedOn;
			}
		},
		areaName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.AreaName;
			}
		},
		cityName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.CityName;
			}
		},
		cityId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.CityId;
			}
		},
		stateName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.StateName;
			}
		},
		CertifiedLogoUrl: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.CertifiedLogoUrl;
			}
		},
		numberOfOwners: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.NoOfOwners;
			}
		},
		isPremium: {
			type: _graphql.GraphQLBoolean,
			resolve: function resolve(stock) {
				return stock.IsPremium;
			}
		},
		isHotDeal: {
			type: _graphql.GraphQLBoolean,
			resolve: function resolve(stock) {
				return stock.IsHotDeal;
			}
		},
		emi: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.Emi;
			}
		},
		absureWarranty: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.AbsureWarranty;
			}
		},
		absureScore: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.AbsureScore;
			}
		},
		emiUrl: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.EmiUrl;
			}
		},
		makeMapping: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.MakeMapping;
			}
		},
		rootMapping: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.RootMapping;
			}
		},
		apiFlag: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.ApiFlag;
			}
		},
		sortScore: {
			type: _graphql.GraphQLFloat,
			resolve: function resolve(stock) {
				return stock.SortScore;
			}
		},
		maskingNumber: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.MaskingNumber;
			}
		},
		sellerName: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.SellerName;
			}
		},
		sellerContact: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.SellerContact;
			}
		},
		hostUrl: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.HostUrl;
			}
		},
		originalImgPath: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.OriginalImgPath;
			}
		},
		certificationId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.CertificationId;
			}
		},
		inspectionText: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.InspectionText;
			}
		},
		hasWarranty: {
			type: _graphql.GraphQLBoolean,
			resolve: function resolve(stock) {
				return stock.HasWarranty;
			}
		},
		dealerQuickBloxId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.DealerQuickBloxId;
			}
		},
		subSegmentID: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.SubSegmentID;
			}
		},
		versionSubSegmentID: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.VersionSubSegmentID;
			}
		},
		bodyStyleId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.BodyStyleId;
			}
		},
		nearByCityStripId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.NBCityStripId;
			}
		},
		deliveryText: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.DeliveryText;
			}
		},
		deliveryCityId: {
			type: _graphql.GraphQLInt,
			resolve: function resolve(stock) {
				return stock.DeliveryCity;
			}
		},
		nearbyCityText: {
			type: _graphql.GraphQLString,
			resolve: function resolve(stock) {
				return stock.NearbyCityText;
			}
		},
		isPremiumPackage: {
			type: _graphql.GraphQLBoolean,
			resolve: function resolve(stock) {
				return stock.IsPremiumPackage;
			}
		},
		isNearbyCityListing: {
			type: _graphql.GraphQLBoolean,
			resolve: function resolve(stock) {
				return stock.IsNearbyCityListing;
			}
		},
		certificationScore: {
			type: _graphql.GraphQLFloat,
			resolve: function resolve(stock) {
				return stock.CertificationScore;
			}
		}
	};
}

exports.default = new _graphql.GraphQLObjectType({
	name: 'stock',
	description: 'Type of stock',
	fields: fields()
});