/* global describe, it, browser, beforeEach */
const expect = require('chai').expect;
describe('Meal Planner App', () => {
  const calories = '2000';
  // beforeEach(() => {
  //   browser.url('http://localhost:3000/');
  // });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();
    expect(actualTitle).to.eql('Daily Meal Planner');
  });

  // describe('Calories Input', () => {
  //   it('Should give a warning if calories are lower than 1000', () => {
  //     browser.element('.form-calories').setValue('999');
  //     console.log(browser.element('.form-input-info-warning'));
  //     expect(browser.element('.form-input-info-warning')).to.eql(true);
  //   });
  //
  //   it('Should give a warning if calories are higher than 3500', () => {
  //     browser.element('.form-calories').setValue('10000');
  //     expect(browser.element('.form-input-info-warning')).to.eql(1);
  //   });
  //
  //   it('Should give the normal message if calories are between normal values', () => {
  //     browser.element('.form-calories').setValue(calories);
  //     expect(browser.element('.form-input-info')).to.eql(true);
  //   });
  // });

  describe('The submit button', () => {
    it('Should be disabled when the calories are empty', () => {
      expect(browser.isEnabled('.submit-btn')).to.eql(false);
    });

    // it('Should be enabled when calories are entered', () => {
    //   browser.url('http://localhost:3000/');
    //   browser.element('.form-calories').setValue(calories);
    //   expect(browser.isEnabled('.submit-btn')).to.eql(true);
    // });
    //
    // it('Should be disabled when excluded items are written incorrectly and calories are entered correctly', () => {
    //   const wrongText = 'm1lk. bananas';
    //   browser.element('.form-calories').setValue(calories);
    //   browser.element('.form-exclude').setValue(wrongText);
    //   expect(browser.isEnabled('.submit-btn')).to.eql(false);
    // });
  });
});
