/* global it, describe, expect, beforeEach, jest */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealPlannerInputContainer from '../components/MealPlannerInputContainer';

configure({ adapter: new Adapter() });

describe('Meal Planner Input Container', () => {
  let component;
  let mountedMealPlannerInput;

  beforeEach(() => {
    component = shallow(<MealPlannerInputContainer handleSubmit={jest.fn()} />);
    mountedMealPlannerInput = mount(<MealPlannerInputContainer handleSubmit={jest.fn()} />);
  });

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  describe('Diet input', () => {
    it('Should have "Good to go!" as default selection', () => {
      const selectDiet = mountedMealPlannerInput.state().diets.filter(diet => (diet.name === 'Good to go!'));
      expect(selectDiet[0].selected).toEqual(true);
    });

    it('Should change selected to true if vegetarian diet is selected', () => {
      mountedMealPlannerInput.instance().handleDietSelect({ target: { value: 'vegetarian' } });
      const selectDiet = mountedMealPlannerInput.state().diets.filter(diet => (diet.value === 'vegetarian'));
      expect(selectDiet[0].selected).toEqual(true);
    });
  });

  describe('Exclude input', () => {
    it('should accept no input', () => {
      expect(mountedMealPlannerInput.state().excludeValue.warning).toEqual(false);
    });

    it('should accept one item', () => {
      mountedMealPlannerInput.instance().handleExcludeValue({ target: { value: 'banana' } });

      expect(mountedMealPlannerInput.state().excludeValue.warning).toEqual(false);
    });
    it('should accept words separated by comma', () => {
      mountedMealPlannerInput.instance().handleExcludeValue({ target: { value: 'banana, muffin' } });
      expect(mountedMealPlannerInput.state().excludeValue.warning).toEqual(false);
    });
    it('should give out a warning if values are not letters, commas or spaces', () => {
      mountedMealPlannerInput.instance().handleExcludeValue({ target: { value: 'banana, ..m=1uffin' } });
      expect(mountedMealPlannerInput.state().excludeValue.warning).toEqual(true);
    });
  });


  describe('Calorie input', () => {
    it('should accept values between 1000 and 3500', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '1000' } });
      expect(mountedMealPlannerInput.state().targetCaloriesValue.warning).toEqual(false);
    });

    it('should give out a warning if values are  numbers and not between 1000 & 3500', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '4000' } });
      expect(mountedMealPlannerInput.state().targetCaloriesValue.warning).toEqual(true);
    });

    it('should give out a warning if characters are not numbers', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '$1^' } });
      expect(mountedMealPlannerInput.state().targetCaloriesValue.warning).toEqual(true);
    });
  });

  describe('Submit button', () => {
    it('Should be disabled if calorie input has no value', () => {
      expect(mountedMealPlannerInput.state().disableButton).toEqual(true);
    });

    it('Should be disabled if exclude input doesn`t have a valid value and calorie input has a correct value', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '1000' } });
      mountedMealPlannerInput.instance().handleExcludeValue({ target: { value: 'banana, ..m=1uffin' } });
      expect(mountedMealPlannerInput.state().disableButton).toEqual(true);
    });

    it('Should be enabled if calorie input has a numerical value between 1000 and 3500', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '1000' } });
      expect(mountedMealPlannerInput.state().disableButton).toEqual(false);
    });

    it('Should be enabled if calorie input has a correct value and exclude has a correct value ', () => {
      mountedMealPlannerInput.instance().handleTargetCalorieChange({ target: { value: '1000' } });
      mountedMealPlannerInput.instance().handleExcludeValue({ target: { value: 'banana, muffin' } });
      expect(mountedMealPlannerInput.state().disableButton).toEqual(false);
    });
  });
});
