/* global jest, describe, it, expect */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import MealResultsListingContainer from '../components/MealResultsListingContainer';
import MealResultsError from '../components/MealResultsError';
import MealResultsListing from '../components/MealResultsListing';
import apiResponse2 from '../mockAPIresponse/apiResponse';

configure({ adapter: new Adapter() });

describe('Meal Result Listing', () => {
  let component;

  it('should render without crashing', () => {
    component = shallow(<MealResultsListingContainer
      apiResponse={apiResponse2}
      error={false}
      handleMealRequest={jest.fn()}
    />);
    expect(component.exists()).toEqual(true);
  });

  it('should render MealResultsError if error is true', () => {
    component =
    mount(<Router>
      <MealResultsListingContainer
        apiResponse={{ apiResponse: '' }}
        error
        handleMealRequest={jest.fn()}
      />
    </Router>);

    expect(component.find(MealResultsError).exists()).toEqual(true);
    expect(component.find(MealResultsListing).exists()).toEqual(false);
  });

  it('should render MealResultsListing if error is false', () => {
    component =
    mount(<Router>
      <MealResultsListingContainer
        apiResponse={apiResponse2}
        error={false}
        handleMealRequest={jest.fn()}
      />
    </Router>);

    expect(component.find(MealResultsError).exists()).toEqual(false);
    expect(component.find(MealResultsListing).exists()).toEqual(true);
  });
});
