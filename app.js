// This is my function that sums two numbers
const sum = (a, b) => {
  return a + b;
};

// Just a console log for ourselves
console.log(sum(7, 3));

const fromEuroToDollar = function (valueInEuro) {
  if (
    typeof valueInEuro == "string" ||
    typeof valueInEuro == "boolean" ||
    typeof valueInEuro == "object"
  )
    return NaN;

  if (valueInEuro < 0) return null;

  if (typeof valueInEuro == "undefined") return undefined;

  let valueInDollar = valueInEuro * 1.17;

  return valueInDollar;
};

const fromDollarToYen = function (valueInDollar) {
  if (
    typeof valueInDollar == "string" ||
    typeof valueInDollar == "boolean" ||
    typeof valueInDollar == "object"
  )
    return NaN;

  if (valueInDollar < 0) return null;

  if (typeof valueInDollar == "undefined") return undefined;

  let valueInYen = valueInDollar * 144.67;

  return valueInYen;
};

const fromYenToPound = function (valueInYen) {
  if (
    typeof valueInYen == "string" ||
    typeof valueInYen == "boolean" ||
    typeof valueInYen == "object"
  )
    return NaN;

  if (valueInYen < 0) return null;

  if (typeof valueInYen == "undefined") return undefined;

  let valueInPound = valueInYen * 0.005;

  return valueInPound;
};

// Export the function to be used on other files
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
