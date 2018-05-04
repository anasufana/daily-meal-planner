/* eslint no-return-assign: ["error", "always"] */

import { Route, withRouter } from 'react-router-dom';
import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInputContainer from './components/MealPlannerInputContainer';
import MealResultsListingContainer from './components/MealResultsListingContainer';

import MealRecipe from './components/MealRecipe';
import getMealPlan from './helpers/getMealPlan';
import getRecipeSteps from './helpers/getRecipeSteps';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: '',
      apiResponseError: true,
      mealRecipe: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSteps = this.getSteps.bind(this);
  }

  getSteps(params) {
    getRecipeSteps(params).then(res => (
      this.setState(
        { mealRecipe: res },
        () => this.props.history.push('/recipe'),
      )
    ));
  }

  handleSubmit(params) {
    getMealPlan(params).then(res => (
      this.setState(
        { apiResponse: res },
        () => {
          if (this.state.apiResponse) {
            this.setState({ apiResponseError: false }, () => this.props.history.push('/results'));
          } else {
            this.props.history.push('/results');
          }
        },
      )
    ));
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
                handleSubmit={params => this.handleSubmit(params)}
              />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <MealResultsListingContainer
                apiResponse={this.state.apiResponse}
                error={this.state.apiResponseError}
                handleMealRequest={params => this.getSteps(params)}
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
