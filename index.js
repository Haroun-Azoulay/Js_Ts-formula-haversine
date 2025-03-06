// Explanation: Using the Haversine formula to calculate the distance between two GPS points
// Φ : Latitude
// λ : Longitude

function formulaHaversine(phiUser, lambdaUser, phiX, lambdaX) {
    var radLatitudeUser = phiUser * (Math.PI / 180);
    var radLatitudeX = phiX * (Math.PI / 180);
    var radLongitudeUser = lambdaUser * (Math.PI / 180);
    var radLongitudeX = lambdaX * (Math.PI / 180);

    // Step 2: Compute the differences between coordinates
    var diffRadLatitude = radLatitudeX - radLatitudeUser;
    var diffRadLongitude = radLongitudeX - radLongitudeUser;

    // Step 3: Compute distance using the Haversine formula
    var a = Math.pow(Math.sin(diffRadLatitude / 2), 2) +
        Math.cos(radLatitudeUser) *
        Math.cos(radLatitudeX) *
        Math.pow(Math.sin(diffRadLongitude / 2), 2);
    var r = 6371; // Earth's radius in kilometers
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c;
    return d < 0 ? Math.ceil(d) : Math.floor(d);
}

exports.default = formulaHaversine;
module.exports = formulaHaversine;
