/* global it, expect, jest */

import React from 'react';
import renderer from 'react-test-renderer';
import MealRecipe from '../components/MealRecipe';

const details = {
  details: {
    recipeTitle: 'My recipe',
    recipeImage: 'https://spoonacular.com/cdn/ingredients_100x100/vanilla-extract.jpg',
    readyInMinutes: 20,
    ingredients:['apple', 'orange'],
    recipe: {
      //recipe:{
      name: 'My recipe',
      steps:['1.Step one', '2.step two']
      //},
    },
  },
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MealRecipe
      details={details.details}
      //recipeImage={details.recipeImage}
      //readyInMinutes={details.readyInMinutes}
      //ingredients={details.ingredients}
      //recipes={details.recipes}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
