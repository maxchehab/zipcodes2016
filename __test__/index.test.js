var zipcodes = require("../index");

test("Checking 97702", () => {
  expect(zipcodes.lookup("97702")).toEqual({
    state: "OR",
    city: "Bend"
  });
});

test("Checking 95945", () => {
  expect(zipcodes.lookup("95945")).toEqual({
    state: "CA",
    city: "Grass Valley"
  });
});

test("Checking invalid number", () => {
  expect(zipcodes.lookup("invalid")).toEqual(null);
});
