/* global it, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import MealPlannerInput from '../components/MealPlannerInput';

const state = {
  targetCaloriesValue:
    {
      value: 'banana',
      warning: false,
      warningText: 'Healthy target should be between 1000 and 3500',
    },
  excludeValue:
    {
      value: '2000',
      warning: false,
      warningText: 'Your exclude options are not valid. Try again.',
    },
  diets: [
    { value: '', name: 'Good to go!', selected: false },
    { value: 'gluten free', name: 'Gluten free', selected: false },
    { value: 'ketogenic', name: 'Ketogenic', selected: false },
    { value: 'vegetarian', name: 'Vegetarian', selected: true },
    { value: 'vegan', name: 'Vegan', selected: false },
    { value: 'pescetarian', name: 'Pescetarian', selected: false },
    { value: 'paleo', name: 'Paleo', selected: false },
  ],
  disableButton: false,
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MealPlannerInput
      {...state}
      handleSubmit={jest.fn()}
      handleDietSelect={jest.fn()}
      handleExcludeValue={jest.fn()}
      handleTargetCalorieChange={jest.fn()}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
