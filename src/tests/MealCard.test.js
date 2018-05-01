/* global it, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import MealCard from '../components/MealCard';

const details = {
  className: 'slide-in-1',
  handleMealRequest: jest.fn(),
  meal: 'Breakfast',
  details: {
    id: 681594,
    image: 'Huevos-Rancheros-681594.jpg',
    imageUrls: ['Huevos-Rancheros-681594.jpg'],
    readyInMinutes: 20,
    title: 'Huevos Rancheros',
  },
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MealCard
      className={details.className}
      meal={details.meal}
      handleMealRequest={details.handleMealRequest}
      details={details.details}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
