/* global it, expect, describe, beforeEach, jest */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import apiResponse2 from '../mockAPIresponse/apiResponse';

configure({ adapter: new Adapter() });

describe('App', () => {
  let mountedApp;
  let props;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(<Router><App /></Router>);
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {
      apiResponse: undefined,
    };
    mountedApp = undefined;
  });

  const mealPlannerInputMock = {
    targetCaloriesValue:
      {
        value: '2000',
        warning: false,
        warningText: 'Healthy target should be between 1000 and 3500',
      },
    excludeValue:
      {
        value: 'banana',
        warning: false,
        warningText: 'Your exclude options are not valid. Try again.',
      },
    diets: [
      { value: '', name: 'Good to go!', selected: false },
      { value: 'gluten free', name: 'Gluten free', selected: false },
      { value: 'ketogenic', name: 'Ketogenic', selected: false },
      { value: 'vegetarian', name: 'Vegetarian', selected: true },
      { value: 'vegan', name: 'Vegan', selected: false },
      { value: 'pescetarian', name: 'Pescetarian', selected: false },
      { value: 'paleo', name: 'Paleo', selected: false },
    ],
    disableButton: false,
  };


  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });

  describe('Get Meal Plan', () => {
    beforeEach(() => {
      mountedApp = mount(<Router><App /></Router>);
    });

    it('Should set the state to mock api if testing is true', () => {
      // mountedApp.setState({ testing: true });
      console.log(mountedApp.instance());
      mountedApp.instance().getMealPlan({
        ...mealPlannerInputMock,
        handleSubmit: jest.fn(),
        handleDietSelect: jest.fn(),
        handleExcludeValue: jest.fn(),
        handleTargetCalorieChange: jest.fn(),
      });
      expect(mountedApp.state().apiResponse).toBe(apiResponse2);
    });

    it('If testing is false, it calls fetch with the right data', () => {

    });

    it('If api response results in error, it sets the state of apiResponseError to true', () => {

    });

    it('If api response is fine, apiResponseError is false and apiResponse should contain the response data', () => {

    });

    it('Should render MealResultsLisingContainer regrdless of the results', () => {

    });
  })


  // API unit testing

  /*
  describe("when `apiResponse` is defined", () => {
    beforeEach(() => {
      props.apiResponse = jest.fn();s
    });

    it("sets the rendered `MealResultsListing`'s `apiResponse`
    prop to the same value as `this.state.apiResponse`'",
    () => {
      const mealResultsListing = app().find(MealResultsListing);
      expect(mealResultsListing.props().apiResponse).toBe(props.apiResponse);
    });
  });
  */

  describe('when `apiResponse` is undefined', () => {
    beforeEach(() => {
      props.apiResponse = undefined;
    });

    it("sets the rendered `MealResultsListing`'s `apiResponse` prop to undefined'", () => {
      const mealResultsListing = app().find(MealResultsListing);
      expect(mealResultsListing.apiResponse).not.toBeDefined();
    });
  });
});
