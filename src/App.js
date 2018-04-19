import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';

const API_KEY = process.env.REACT_APP_API_KEY;

var request = require("request");

var options = { method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day',
  qs: { stepBreakdown: 'false' },
  headers:
   { 'Postman-Token': 'fd97f5de-ff8a-4f54-83c9-9a261d2e7e71',
     'Cache-Control': 'no-cache',
     'X-Mashape-Host': 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?timeFrame=day',
     'X-Mashape-Key': API_KEY}}
     ;

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  const newBody = JSON.parse(body)
  console.log(newBody);

});


const App = () => (
  <div className="App">
    <Header />
    <MealPlannerInput />
    <MealResultsListing />
  </div>
);

export default App;
