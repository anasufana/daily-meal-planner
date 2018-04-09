/* global describe, it, browser, beforeEach */
const expect = require('chai').expect;
describe('Meal Planner App', () => {
  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Daily Meal Planner');
  });

  describe('The submit button', () => {
    it('Should be disabled when the form is empty', () => {
      expect(browser.isEnabled('.submit-btn')).to.eql(false);
    });
  });
});
