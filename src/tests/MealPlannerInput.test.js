/* global it, describe, expect, beforeEach */

import React from 'react';
import { configure, shallow } from 'enzyme';
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

  describe('Exclude input', () => {
    it('should accept words separated by comma', () => {
     expect(component.find('.form-exclude').text()).toEqual('nuts, bananas');
    });
  });
});
