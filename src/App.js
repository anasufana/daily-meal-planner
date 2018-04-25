import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';
import apiResponse2 from './mockAPIresponse/apiResponse';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: '',
    };

    this.getMealPlan = this.getMealPlan.bind(this);
  }

  getMealPlan(params) {
    const testing = false;

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

  render() {
    return (
      <div className="App">
        <Header />
        <MealPlannerInput handleSubmit={params => this.getMealPlan(params)} />
        {
          this.state.apiResponse && (
            <MealResultsListing apiResponse={this.state.apiResponse} />
          )
        }
      </div>
    );
  }
}

export default App;
