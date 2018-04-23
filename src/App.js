import React from 'react';
import request from 'request';
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

      const options = {
        method: 'GET',
        url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?${query}`,
        qs: { stepBreakdown: 'false' },
        headers:
         {
           'Postman-Token': 'fd97f5de-ff8a-4f54-83c9-9a261d2e7e71',
           'Cache-Control': 'no-cache',
           'X-Mashape-Host': 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?timeFrame=day',
           'X-Mashape-Key': API_KEY,
         },
      };

      request(options, (error, response, body) => {
        if (error) throw new Error(error);

        const apiResponse = JSON.parse(body);
        this.setState({ apiResponse: { ...apiResponse } });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MealPlannerInput handleSubmit={params => this.getMealPlan(params)} />
        <MealResultsListing apiResponse={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
