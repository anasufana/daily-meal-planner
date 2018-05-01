import { Route, withRouter } from 'react-router-dom';
import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';
import MealCaloriesDonut from './components/MealCaloriesDonut';
import MealRecipe from './components/MealRecipe';
import apiResponse2 from './mockAPIresponse/apiResponse';
import mealStepsResponse from './mockAPIresponse/mealStepsResponse';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      apiResponseError: false,
      mealRecipe: '',
      testing: true,
    };

    this.getMealPlan = this.getMealPlan.bind(this);
    this.getRecipeSteps = this.getRecipeSteps.bind(this);
  }

  getMealPlan(params) {

    if (this.state.testing) {
      this.setState({ apiResponse: { ...apiResponse2 } });
      this.props.history.push('/results');
    } else {
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
        .then((body) => {
          if (!body.status) {
            this.setState({ apiResponse: { ...body } });
            this.setState({ apiResponseError: false });
          } else {
            this.setState({ apiResponseError: true });
            this.setState({ apiResponse: '' });
          }
          this.props.history.push('/results');
        })
        .catch(err => console.error(err));
    }
  }

  getRecipeSteps(params) {
    if(this.state.testing) {
      this.filterRecipeData(params, mealStepsResponse);
      // this.props.history.push('/recipe');
    }
    return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${params.id}/analyzedInstructions?stepBreakdown=true`,
      {
        method: 'GET',
        headers: new Headers({
          'X-Mashape-Key': API_KEY,
          Accept: 'application/json',
        }),
      }
    )
      .then(body => body.json())
      .then(body => this.filterRecipeData(params, body))
      .catch(err => console.error(err));
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
    this.props.history.push('/recipe');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Route
            exact path="/"
            render={() => (
              <MealPlannerInput handleSubmit={params => this.getMealPlan(params)} />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <MealResultsListing
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
//
// <MealPlannerInput handleSubmit={params => this.getMealPlan(params)} />
// {
//   this.state.apiResponse && (
//     <MealResultsListing
//       apiResponse={this.state.apiResponse}
//       handleMealRequest={params => this.getRecipeSteps(params)}
//     />
//   )
// }
// {
//   this.state.apiResponseError && (
//     <h2 className="meal-results-error">
//       Ooops! We can&apos;t seem to find a meal plan with theese requirements.<br />
//       Please try again!
//     </h2>
//    )
// }
// {
//   this.state.mealRecipe && (
//     <MealRecipe details={this.state.mealRecipe} />
//   )
// }
