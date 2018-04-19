import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';

// fetchOrders = (customParams) => {
//     // Merge params with defaults
//     const requestParams = {
//       ...this.state.formDefaults,
//       ...customParams
//     }
//
//     // tell state what we've requested, for lter usage
//     this.setState({ formRequested: requestParams });
//
//     // construct URL params
//     const euc = encodeURIComponent;
//     const query = Object.keys(requestParams)
//       .map(k => `${euc(k)}=${euc(requestParams[k])}`)
//       .join('&');
//
//     return fetch(
//       `https://turing-ms-falcon-api-dev1.azurewebsites.net/api/getluckymenu?${query}`, {
//         'Accept': 'application/json'
//       })
//       // convert response to json
//       .then((data) => data.json())
//       // give each order an ID for React to use as keys
//       .then((orders) => orders.map(order => ({ ...order, id: shortid.generate() })))
//       // give each item in items a unique generated ID, as items may be duplicated
//       // .then((orders) => orders.map(order => order.items.map(item => ({ ...item, uid: shortid.generate() }))))
//       .then((orders) => orders.map(order => ({
//         ...order,
//         items: order.items.map(item => ({ ...item, uid: shortid.generate() }))
//       })))
//       // step used just for console logging orders, for debugging
//       .then((orders) => { console.log(orders); return orders; })
//       .catch((err) => console.error('There has been an error cap\'ain'));
//   }

class App extends React.Component {
  constructor() {
    super();
  }

  getMealPlan = () => {
    const request = require("request");
    const API_KEY = process.env.REACT_APP_API_KEY;

    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?diet=vegetarian&exclude=shellfish%2C+olives&targetCalories=2000&timeFrame=day',
      qs: { stepBreakdown: 'false' },
      headers:
       {
         'Postman-Token': 'fd97f5de-ff8a-4f54-83c9-9a261d2e7e71',
         'Cache-Control': 'no-cache',
         'X-Mashape-Host': 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/mealplans/generate?timeFrame=day',
         'X-Mashape-Key': API_KEY
       }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      const newBody = JSON.parse(body)
      console.log(newBody);

    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <MealPlannerInput handleSubmit={() => this.getMealPlan() } />
        <MealResultsListing />
      </div>
    )
  }
}

export default App;
