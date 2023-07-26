function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
  }
  
  function toFahrenheit(celsius) {
    return celsius * 1.8 + 32;
  }
  
  module.exports = { toCelcius, toFahrenheit };