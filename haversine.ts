// Explanation: Using the Haversine formula to calculate the distance between two GPS points
// Φ : Latitude
// λ : Longitude

function formulaHaversine(
  phiUser: number,
  lambdaUser: number,
  phiX: number,
  lambdaX: number
): number {
  let radLatitudeUser = phiUser * (Math.PI / 180);
  let radLatitudeX = phiX * (Math.PI / 180);

  let radLongitudeUser = lambdaUser * (Math.PI / 180);
  let radLongitudeX = lambdaX * (Math.PI / 180);

  // Step 2: Compute the differences between coordinates
  let diffRadLatitude = radLatitudeX - radLatitudeUser;
  let diffRadLongitude = radLongitudeX - radLongitudeUser;

  // Step 3: Compute distance using the Haversine formula
  let a =
    Math.pow(Math.sin(diffRadLatitude / 2), 2) +
    Math.cos(radLatitudeUser) *
    Math.cos(radLatitudeX) *
    Math.pow(Math.sin(diffRadLongitude / 2), 2);

  let r = 6371; // Earth's radius in kilometers

  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  let d = r * c;
  return d < 0 ? Math.ceil(d) : Math.floor(d);
}

export default formulaHaversine;
