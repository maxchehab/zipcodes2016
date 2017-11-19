zipcodes2016
=======


Node module to easily lookup city and state for a US zipcode

Install using npm:

    npm install zipcodes2016

```javascript
var zipcode = require('zipcodes2016');

// returns data in [city, state] format
zipcode.lookup('97703'); // ['Bend','OR']

// if zipcode is invalid, null will be returned
zipcode.lookup('invalid'); // null
```

## License

MIT
