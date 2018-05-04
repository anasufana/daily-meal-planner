/* global fetch, Headers */

import apiResponse2 from '../mockAPIresponse/apiResponse';

const API_KEY = process.env.REACT_APP_API_KEY;
const testing = true;

const getMealPlan = (params) => {
  if (testing) {
    return new Promise((resolve) => {
      resolve({ ...apiResponse2 });
    });
  }
  const defaultQueryObject = {
    diet: '',
    exclude: '',
    targetCalories: '',
    timeFrame: 'day',
  };
  const filteredDiet = params.diets.filter(diet => diet.selected === true);

  const requestObject = {
    ...defaultQueryObject,
    diet: filteredDiet[0].value,
    exclude: params.excludeValue.value.toLowerCase(),
    targetCalories: params.targetCaloriesValue.value,
  };

  const euc = encodeURIComponent;
  const query = Object.keys(requestObject)
    .map(k => `${euc(k)}=${euc(requestObject[k])}`)
    .join('&');

  return fetch(
    `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?${query}&stepBreakdown=false`,
    {
      method: 'GET',
      headers: new Headers({
        'X-Mashape-Key': API_KEY,
        Accept: 'application/json',
      }),
    },
  )
    .then(body => body.json())
    .then((body) => {
      if (!body.status) {
        return body;
      }
      return '';
    })
    .catch(err => console.error(err)); //eslint-disable-line
};

export default getMealPlan;
