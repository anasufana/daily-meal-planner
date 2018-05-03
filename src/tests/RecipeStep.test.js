/* global it, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import RecipeStep from '../components/RecipeStep';

const details = {
  details: {
    number: 1,
    step: 'Preheat the oven to 200 degrees F.'
  },
};

it('renders correctly', () => {
  const tree = renderer
    .create(<RecipeStep
      details={details.details}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
