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
 
  describe('Calories Input', () => {
    it('Should give a warning if calories are lower than 1000', () => {
      browser.element('.form-calories').setValue('999');
      expect(browser.getText('.form-input-info-warning=Healthy target should be between 1000 and 3500')).to.eql('Healthy target should be between 1000 and 3500');
    });

    it('Should give the normal message if calories are between normal values', () => {
      browser.element('.form-calories').setValue('2000');
      expect(browser.getText('.form-input-info=Healthy target should be between 1000 and 3500')).to.eql('Healthy target should be between 1000 and 3500');
    });
  });
  
  describe('The submit button', () => {
    it('Should be disabled when the calories and exclude are empty', () => {
      expect(browser.isEnabled('.submit-btn')).to.eql(false);
    });

    it('Should be enabled when the calories are 1200 and exclude values are "nuts, banana"', () => {
      browser.element('.form-calories').setValue('1200');
      browser.element('.form-exclude').setValue('nuts, banana'); 
      expect(browser.isEnabled('.submit-btn')).to.eql(true);
    });
  });
});
