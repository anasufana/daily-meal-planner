/* global it, expect */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealPlannerInput from '../components/MealPlannerInput';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<MealPlannerInput />);
  expect(component.exists()).toEqual(true);
});


