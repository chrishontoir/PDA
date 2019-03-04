var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // Unit Tests
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add two numbers', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    const result = calculator.runningTotal
    assert.equal(result, 5)
  })

  it('should be able to subtract two numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    const result = calculator.runningTotal
    assert.equal(result, 3)
  })

  it('should be able to multiply two numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    const result = calculator.runningTotal
    assert.equal(result, 15)
  })

  it('should be able to divide two numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    const result = calculator.runningTotal
    assert.equal(result, 3)
  })

  // Integration Tests
  it('should concatenate multiple number clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(5)
    const result = calculator.runningTotal
    assert.equal(result, 25)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(7)
    calculator.operatorClick("=")
    const result = calculator.previousTotal
    assert.equal(result, 11)
  })

  it('should clear running total without affecting the calculation', function() {
    calculator.numberClick(6)
    calculator.operatorClick("*")
    calculator.numberClick(8)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick("=")
    const result = calculator.previousTotal
    assert.equal(result, 30)
  })



});
