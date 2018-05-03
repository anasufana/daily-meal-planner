/* global it, expect, jest */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MealResultsError from '../components/MealResultsError';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><MealResultsError
    /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
