const { expect } = require('chai');
const { toCelcius, toFahrenheit } = require('./app');

describe('Temperature Conversion', () => {
  // Test for toCelcius function
  it('should convert positive Fahrenheit to Celsius', () => {
    expect(toCelcius(50)).to.equal(10);
    expect(toCelcius(100.0)).to.equal(37.77777777777778);
  });

  it('should convert negative Fahrenheit to Celsius', () => {
    expect(toCelcius(-4)).to.equal(-20);
    expect(toCelcius("-32.0")).to.equal(-35.55555555555556);
  });

  it('should convert 0 Fahrenheit to Celsius', () => {
    expect(toCelcius(0)).to.equal(-17.77777777777778);
  });

  // Test for toFahrenheit function
  it('should convert positive Celsius to Fahrenheit', () => {
    expect(toFahrenheit(10)).to.equal(50);
    expect(toFahrenheit(100)).to.equal(212);
  });

  it('should convert negative Celsius to Fahrenheit', () => {
    expect(toFahrenheit(-20)).to.equal(-4);
    expect(toFahrenheit("-32")).to.equal(-25.6);
  });

  it('should convert 0 Celsius to Fahrenheit', () => {
    expect(toFahrenheit(0)).to.equal(32);
  });
});