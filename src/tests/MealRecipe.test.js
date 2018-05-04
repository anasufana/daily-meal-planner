/* global it, expect */

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import MealRecipe from '../components/MealRecipe';

const details = {
  recipeTitle: 'My recipe',
  recipeImage: 'Salmon-Artichoke-Quiche-516473.png',
  readyInMinutes: 95,
  ingredients: [['granulated sugar', 'baking powder', 'vanilla extract']],
  recipes: [
    [
      {
        name: '',
        ingredients: ['banana', 'apple'],
        steps: [
          { number: 1, step: 'Preheat the oven to 200 degrees F.' },
          { number: 2, step: 'Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.' },
        ],
      },
      {
        name: 'Bourbon Molasses Butter',
        ingredients: ['molasses', 'fresh mint'],
        steps: [
          { number: 1, step: 'Combine the bourbon and sugar in a small saucepan and cook over high heat until reduced to 3 tablespoons, remove and let cool.' },
          {
            number: 2,
            step: 'Put the butter, molasses, salt and cooled bourbon mixture in a food processor and process until smooth.',
          },
        ],
      },
    ],
  ],
};

it.only('renders correctly', () => {
  const tree = renderer
    .create(<Router><MealRecipe details={details} /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
