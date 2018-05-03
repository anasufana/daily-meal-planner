/* eslint no-return-assign: ["error", "always"] */
/* global fetch, Headers */

import { Route, withRouter } from 'react-router-dom';
import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInputContainer from './components/MealPlannerInputContainer';
import MealResultsListingContainer from './components/MealResultsListingContainer';

import MealRecipe from './components/MealRecipe';
import getMealPlan from './helpers/getMealPlan';
import mealStepsResponse from './mockAPIresponse/mealStepsResponse';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: '',
      apiResponseError: false,
      mealRecipe: '',
      testing: true,
    };

    this.getRecipeSteps = this.getRecipeSteps.bind(this);
  }

  getRecipeSteps(params) {
    if (this.state.testing) {
      this.filterRecipeData(params, mealStepsResponse);
    } else {
      fetch(
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
        .then(body => this.filterRecipeData(params, body))
        .catch(err => console.error(err)); //eslint-disable-line
    }
  }

  filterRecipeData(params, stepsResponse) {
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

    this.setState({ mealRecipe: { ...mealRecipe } });
    this.props.history.push('/recipe');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <MealPlannerInputContainer
                handleSubmit={(params, history) => getMealPlan(params, this.props.history.push('/results'))}
              />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <MealResultsListingContainer
                apiResponse={this.state.apiResponse}
                error={this.state.apiResponseError}
                handleMealRequest={params => this.getRecipeSteps(params)}
              />
            )}
          />
          <Route
            path="/recipe"
            render={() => (
              <MealRecipe details={this.state.mealRecipe} />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
