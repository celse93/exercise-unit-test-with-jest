// Import the functions from the app.js file

const { sum } = require("./app.js");
const { fromEuroToDollar } = require("./app.js");
const { fromDollarToYen } = require("./app.js");
const { fromYenToPound } = require("./app.js");

// Start your first test
test("adds 14 + 9 to equal 23", () => {
  // Inside the test we call our sum function with 2 numbers
  let total = sum(14, 9);

  // We expect the sum of those 2 numbers to be 23
  expect(total).toBe(23);
});

test("One euro should be 1.17 dollars", () => {
  const dollars = fromEuroToDollar(3.5);

  // If 1 euro is 1.17 dollars, then 3.5 euros should be (3.5 * 1.17)
  const expected = 3.5 * 1.17;

  // This is the comparison for the unit test
  // 1 euro is 1.17 dollars, then 3.5 euros should be = (3.5 * 1.17)
  expect(dollars).toBe(expected);
});

test("One dollar should be 144.67 yens", () => {
  const yens = fromDollarToYen(50);

  const expected = 50 * 144.67;

  // This is the comparison for the unit test
  expect(yens).toBe(expected);
});

test("One yen should be 0.005 pounds", () => {
  const pounds = fromYenToPound(500);

  const expected = 500 * 0.005;

  // This is the comparison for the unit test
  expect(pounds).toBe(expected);
});

test("EuroToDollar: String argument should return NaN", () => {
  expect(fromEuroToDollar("")).toBeNaN();
});

test("DollarToYen: String argument should return NaN", () => {
  expect(fromDollarToYen("")).toBeNaN();
});

test("YenToPound: String argument should return NaN", () => {
  expect(fromYenToPound("")).toBeNaN();
});

test("EuroToDollar: Negative currency should return null", () => {
  expect(fromEuroToDollar(-1)).toBeNull();
});

test("DollarToYen: Negative currency should return null", () => {
  expect(fromDollarToYen(-1)).toBeNull();
});

test("YenToPound: Negative currency should return null", () => {
  expect(fromYenToPound(-1)).toBeNull();
});

test("EuroToDollar: Boolean argument should return NaN", () => {
  expect(fromEuroToDollar(true)).toBeNaN();
});

test("EuroToDollar: Boolean argument should return NaN", () => {
  expect(fromEuroToDollar(false)).toBeNaN();
});

test("DollarToYen: Boolean argument should return NaN", () => {
  expect(fromDollarToYen(true)).toBeNaN();
});

test("DollarToYen: Boolean argument should return NaN", () => {
  expect(fromDollarToYen(false)).toBeNaN();
});

test("YenToPound: Boolean argument should return NaN", () => {
  expect(fromYenToPound(true)).toBeNaN();
});

test("YenToPound: Boolean argument should return NaN", () => {
  expect(fromYenToPound(false)).toBeNaN();
});

test("EuroToDollar should return undefined", () => {
  expect(fromEuroToDollar()).toBeUndefined();
});

test("DollarToYen should return undefined", () => {
  expect(fromDollarToYen()).toBeUndefined();
});

test("YenToPound should return undefined", () => {
  expect(fromYenToPound()).toBeUndefined();
});

test("EuroToDollar: Object argument should return NaN", () => {
  expect(fromEuroToDollar({})).toBeNaN();
});

test("DollarToYen: Object argument should return NaN", () => {
  expect(fromDollarToYen({})).toBeNaN();
});

test("YenToPound: Object argument should return NaN", () => {
  expect(fromYenToPound({})).toBeNaN();
});

test("EuroToDollar: Array argument should return NaN", () => {
  expect(fromEuroToDollar([])).toBeNaN();
});

test("DollarToYen: Array argument should return NaN", () => {
  expect(fromDollarToYen([])).toBeNaN();
});

test("YenToPound: Array argument should return NaN", () => {
  expect(fromYenToPound([])).toBeNaN();
});

test("EuroToDollar: Euro input currency should return at least 0", () => {
  expect(fromEuroToDollar(0)).toBeGreaterThanOrEqual(0);
});

test("DollarToYen: Dollar input currency should return at least 0", () => {
  expect(fromDollarToYen(0)).toBeGreaterThanOrEqual(0);
});

test("YenToPound: Yen input currency should return at least 0", () => {
  expect(fromYenToPound(0)).toBeGreaterThanOrEqual(0);
});
