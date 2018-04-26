import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';
import MealRecipe from './components/MealRecipe';
import apiResponse2 from './mockAPIresponse/apiResponse';
import mealStepsResponse from './mockAPIresponse/mealStepsResponse';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: '',
      mealRecipe: '',
    };

    this.getMealPlan = this.getMealPlan.bind(this);
    this.getRecipeSteps = this.getRecipeSteps.bind(this);
  }

  getMealPlan(params) {
    const testing = true;

    if (testing) {
      this.setState({ apiResponse: { ...apiResponse2 } });
    } else {
      const API_KEY = process.env.REACT_APP_API_KEY;

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

      return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?${query}&stepBreakdown=false`,
        {
          method: 'GET',
          headers: new Headers({
            'X-Mashape-Key': API_KEY,
            Accept: 'application/json',
          }),
        }
      )
        .then(body => body.json())
        .then(body => this.setState({ apiResponse: { ...body } }))
        .catch(err => console.error(err));
    }
  }

  getRecipeSteps(params) {
    // this.setState({ mealSteps: [...mealStepsResponse] });

    //params.id to use for fetch api
    const mealRecipe = {
      recipeTitle: params.title,
      recipeImage: params.image,
      readyInMinutes: params.readyInMinutes,
      recipes:
        [

          mealStepsResponse.map((meal) => {
            const recipeIngredients = [];
            const recipeSteps = [];

            meal.steps.map((step) => {
              recipeSteps.push({ number: step.number, step: step.step });
              step.ingredients.map(ingredient => (
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
    mealRecipe.recipes[0].map(meal => (mealIngredients = [...mealIngredients, ...meal.ingredients]));
    mealIngredients = mealIngredients.reduce((x, y) => (x.includes(y) ? x : [...x, y]), []);
    mealRecipe.ingredients = [mealIngredients];

    this.setState({ mealRecipe: { ...mealRecipe } });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MealPlannerInput handleSubmit={params => this.getMealPlan(params)} />
        {
          this.state.apiResponse && (
            <MealResultsListing
              apiResponse={this.state.apiResponse}
              handleMealRequest={params => this.getRecipeSteps(params)}
            />
          )
        }
        {
          this.state.mealRecipe && (
            <MealRecipe details={this.state.mealRecipe} />
          )
        }
      </div>
    );
  }
}

export default App;
