const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  it('number buttons should update the display of running total', function(){
    element(by.css('#number2')).click();
    element(by.css('#number5')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('25')
  })
  it('should update the result of operation after pressing button with arithmetical operation', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })
  it('should be able to chain multiple operations together', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })
  it('should be able to output negative number', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('-4')
  })
  it('should be able to output positive number', function(){
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })
  it('should be able to output decimal number', function(){
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('3.5')
  })
  it('should be able to output very large number', function(){
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('1853020188851841')
  })
  it('should not allow you to divide by 0', function(){
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('Cannot divide by 0')
  })
});
