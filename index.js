const zipcodes = require("./zipcodes.json");

function lookup(zipcode) {
  for (let z of zipcodes) {
    if (z.zipcode == zipcode) {
      return { city: z.city, state: z.state };
    }
  }
  return null;
}

module.exports = { lookup };
