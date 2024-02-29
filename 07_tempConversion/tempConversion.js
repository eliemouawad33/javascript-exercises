const convertToCelsius = function(tempF) {
  let n = (tempF - 32) * (5/9);
  return Math.round(n * 10) / 10;
};
const convertToFahrenheit = function(tempC) {
  let x = tempC * (9/5) + 32;
  return Math.round(x * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
