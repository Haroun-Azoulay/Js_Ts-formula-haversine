# haversine-distance

[![Version](http://img.shields.io/npm/v/formula-haversine.svg)](https://www.npmjs.org/package/formula-haversine)

[![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue.svg)](https://www.typescriptlang.org/)


A TypeScript implementation of the Haversine formula to calculate the great-circle distance between two geographical points on Earth. The distance is returned in kilometers.


## 🔍️ Example


### ✨ Import


```typescript

import haversine from 'haversine-distance'

```


### 📌 Usage


```javascript

For example i want calculate distance bewteen Paris and Tokyo :

// Define coordinates
paris = { 48.864716, 2.349014 }
tokyo = { 35.67619190, 139.65031060  }

const parisLatitude = 48.864716

const parisLongitude = 2.349014

const tokyoLatitude = 35.67619190

const tokyoLongitude = 139.65031060

// Compute the distance
const distance = haversine(parisLatitude, parisLongitude, tokyoLatitude, tokyoLongitude);

// Note: The result is in kilometers, rounded down to the nearest integer.
console.log(`Distance between Paris and Tokyo: ${distance} km`)




```

## LICENSE [MIT](LICENSE)