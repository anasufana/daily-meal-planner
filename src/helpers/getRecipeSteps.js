/* global fetch, Headers */
import mealStepsResponse from '../mockAPIresponse/mealStepsResponse';

const API_KEY = process.env.REACT_APP_API_KEY;
const testing = false;

const filterRecipeData = (params, stepsResponse) => {
  const mealRecipe = {
    recipeTitle: params.title,
    recipeImage: params.image,
    readyInMinutes: params.readyInMinutes,
    recipes:
      [

        stepsResponse.map((meal) => {
          const recipeIngredients = [];
          const recipeSteps = [];

          meal.steps.map((step) => {
            recipeSteps.push({ number: step.number, step: step.step });
            return step.ingredients.map(ingredient => (
              recipeIngredients.push(ingredient.name)
            ));
          });

          return (
            {
              name: meal.name,
              ingredients: recipeIngredients,
              steps: recipeSteps,
            }
          );
        }),
      ],
  };

  let mealIngredients = [];
  mealRecipe.recipes[0]
    .map((meal) => {
      mealIngredients = [...mealIngredients, ...meal.ingredients];
      return true;
    });
  mealIngredients = mealIngredients.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
  mealRecipe.ingredients = [mealIngredients];

  return { ...mealRecipe };
};

const getRecipeSteps = (params) => {
  if (testing) {
    return new Promise((resolve) => {
      resolve(filterRecipeData(params, mealStepsResponse));
    });
  }
  return fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${params.id}/analyzedInstructions?stepBreakdown=true`,
    {
      method: 'GET',
      headers: new Headers({
        'X-Mashape-Key': API_KEY,
        Accept: 'application/json',
      }),
    },
  )
    .then(body => body.json())
    .then(body => filterRecipeData(params, body))
    .catch(err => console.error(err)); //eslint-disable-line
};

export default getRecipeSteps;
