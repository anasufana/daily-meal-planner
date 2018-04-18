/* global it, describe, expect, beforeEach */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealPlannerInput from '../components/MealPlannerInput';

configure({ adapter: new Adapter() });

describe('Meal Planner Input', () => {
  let component;
  beforeEach(() => {
    component = shallow(<MealPlannerInput />);
  });

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  describe('Diet input', () => {
    it('Should have "Good to go!" as default selection', () => {
      const mountComponent = mount(<MealPlannerInput />);
      // console.log(mountComponent.find('.dropdown-select'))
      expect(mountComponent.find('.dropdown-select').childAt(0).prop('defaultValue')).toEqual(true);
    });
  });

  describe('Exclude input', () => {
    it('should accept no input', () => {
    });

    // it('should accept one item', () => {
    //
    // });
    // it('should accept words separated by comma', () => {
    //   const inputExclude = component.find('.form-exclude').text('nuts, bananas');
    //
    // });
    // it('should give out a warning and disable submit button if values are not letters, commas or spaces', () => {
    //
    // });
  });

  // describe('Calorie input', () => {
  //   it('should accept values between 1000 and 3500', () => {
  //
  //   });
  //
  //   it('should give out a warning if values are  numbers and not between 1000 & 3500', () => {
  //
  //   });
  //
  //   it('should give out a warning and disable submit button if characters are not numbers', () => {
  //
  //   });
  // });

  // describe('Submit button', () => {
  //   it('Should be disabled if calorie input has no value', () => {
  //
  //   });
  //
  //   it('Should be enabled if calorie input has a numerical value', () => {
  //
  //   });
  // });
});
