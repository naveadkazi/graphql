var dice = 3;
var sides = 6;
var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open("POST", "http://localhost:4000/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = handleGraphQlResponse;

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
var t0 = performance.now();
xhr.send(
JSON.stringify({
  query: query
})
);


function handleGraphQlResponse(){
	var res = xhr.response;
	var content = document.getElementById('content');
	content.innerHTML = JSON.stringify(res);
  var t1 = performance.now();
  console.log('Took', (t1 - t0).toFixed(4), 'milliseconds');
}
