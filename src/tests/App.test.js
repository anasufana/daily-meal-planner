/* global it, expect, describe, beforeEach, jest */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import MealPlannerInputContainer from '../components/MealPlannerInputContainer';
import MealResultsListingContainer from '../components/MealResultsListingContainer';
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

  describe('Routes', () => {
    it('renders MealPlannerInputContainer', () => {
      mountedApp = mount(<Router initialEntries={['/']}><App /></Router>);
      expect(mountedApp.find(MealPlannerInputContainer).length).toEqual(1);
    });
  });
});
