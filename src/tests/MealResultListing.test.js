import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MealResultsListing from '../components/MealResultsListing';
import PropTypes from 'prop-types';

configure({ adapter: new Adapter() });

describe('Meal Result Listing', () => {
  let component;
  let props;
  let mountedMealResultListing
  const mealResultListing = () => {
      if (!mountedMealResultListing) {
        mountedMealResultListing = mount(
          <MealResultsListing />
        );
      }
  return mountedMealResultListing;
 }

  beforeEach(() => {
    component = shallow(<MealResultsListing />);

  });

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

});
