const convertToCelsius = function(fahrenheitTemp) {

  let celsius = (fahrenheitTemp - 32) * (5/9);

  // round to one decimal place
  celsius = Math.round(celsius * 10) / 10;

  return celsius;


};

const convertToFahrenheit = function(celsiusTemp) {

  let fahrenheit = (celsiusTemp * (9/5)) + 32;

  // round to one decimal place
  fahrenheit = Math.round(fahrenheit * 10) / 10;

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
