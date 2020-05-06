var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {



  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('it should be able to add numbers', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })
  it('should be able to subtract numbers', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })
  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })
  it('should be able to divide numbers', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })
  it('should be able to concatenate numbers', function(){
    calculator.previousTotal = 0
    calculator.numberClick(1)
    calculator.numberClick(2)
    assert.equal(12, calculator.runningTotal)
  })
  it('should be able to chain multiple operators together', function(){
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(16, calculator.runningTotal)
  })
  it('should be able to clear the running total without affecting the calculation', function(){
    calculator.numberClick(4)
    calculator.operatorClick('*')
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal)
  })


  // calculator.clearClick() - clear the running total without affecting the calculation

});
