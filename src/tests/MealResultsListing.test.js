/* global it, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MealResultsListing from '../components/MealResultsListing';
import apiResponse2 from '../mockAPIresponse/apiResponse';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router>
      <MealResultsListing
        apiResponse={apiResponse2}
        error={false}
        handleMealRequest={jest.fn()}
      />
    </Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
