# haversine-distance

[![Version](http://img.shields.io/npm/v/formula-haversine.svg)](https://www.npmjs.org/package/formula-haversine)


[Javascript/Typescript] - The fatest implementation of the Haversine formula to calculate the great-circle distance between two geographical points on Earth. The distance is returned in kilometers.


## 🔍️ Example


### ✨ Import


```javascript

import haversine from 'formula-haversine'
// or
const haversine = require('formula-haversine')


```


### 📌 Usage


```javascript

// For example i want calculate distance bewteen Paris: { 48.864716, 2.349014 } and Tokyo: { 35.67619190, 139.65031060 } :

// Define coordinates.
const parisLatitude = 48.864716

const parisLongitude = 2.349014

const tokyoLatitude = 35.67619190

const tokyoLongitude = 139.65031060

// Compute the distance.
const distance = haversine(parisLatitude, parisLongitude, tokyoLatitude, tokyoLongitude);

// Note: The result is in kilometers, rounded down to the nearest integer.
console.log(`Distance between Paris and Tokyo: ${distance} km`)




```

## LICENSE [MIT](LICENSE)
