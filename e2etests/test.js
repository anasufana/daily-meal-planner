/* global describe, it, browser, beforeEach */
const expect = require('chai').expect;
describe('TodoList App', () => {
  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Daily Meal Planner');
  });
});
