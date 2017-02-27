var request = require("request-promise");
var express = require('express');


var app = express();

app.get('/', function (req, res) {
  var start = new Date();
  call().then(function(resp){
    console.log('Request to stg2 stock API through GraphQL took:', new Date() - start, 'ms');
    res.send(resp);


  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

var query = `query stockQuery {
  stocks {
    profileId,
    priceNumeric,
    carName,
    makeId,
    rootId,
    profileUrl,
    frontImagePath,
    inquiryId,
    seller,
    photoCount,
    priceNumeric,
    kilometersFormatted,
    kilometersNumeric,
    makeYear,
    makeName,
    rootName,
    modelName,
    versionName,
    maskingName,
    color,
    fuel,
    additionalFuel,
    gearBox,
    sellerNote,
    videoCount,
    offerStartDate,
    offerEndDate,
    lastUpdatedOn,
    areaName,
    cityName,
    cityId,
    stateName,
    CertifiedLogoUrl,
    numberOfOwners,
    isPremium,
    isHotDeal,
    emi,
    absureWarranty,
    absureScore,
    emiUrl,
    makeMapping,
    rootMapping,
    apiFlag,
    sortScore,
    maskingNumber,
    sellerName,
    sellerContact,
    hostUrl,
    originalImgPath,
    certificationId,
    inspectionText,
    hasWarranty,
    dealerQuickBloxId,
    subSegmentID,
    versionSubSegmentID,
    bodyStyleId,
    nearByCityStripId,
    deliveryText,
    deliveryCityId,
    nearbyCityText,
    isPremiumPackage,
    isNearbyCityListing,
    certificationScore,
  }
}`;


function call(){
  var options = { method: 'POST',
    uri: 'http://localhost:4000/graphql',
    body: {
        query: query
    },
    headers:
     { "Content-Type": "application/json","Accept": "application/json" },json: true };

    return request(options);
}
