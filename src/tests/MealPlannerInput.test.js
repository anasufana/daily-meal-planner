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
    it.only('Should have "Good to go!" as default selection', () => {
      let mountComponent = mount(<MealPlannerInput />);
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
  });
});
