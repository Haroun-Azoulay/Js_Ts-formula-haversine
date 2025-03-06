
/**

 * Return the Haversine distance in kilometers, rounded down to the nearest integer.

 * @param aLatitude - first location latitude

 * @param aLongitude - first location longitude

 * @param bLatitude - second location latitude

 * @param bLongitude - second location longitude

 */
declare function formulaHaversine(
    phiUser: number,
    lambdaUser: number,
    phiX: number,
    lambdaX: number
): number;

export = formulaHaversine;
export default formulaHaversine;