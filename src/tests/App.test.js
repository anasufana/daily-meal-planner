/* global it, expect, jest */

import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Header from '../components/Header';
import MealPlannerInput from '../components/MealPlannerInput'
import MealResultsListing from '../components/MealResultsListing'

configure({ adapter: new Adapter() });

describe("App", () => {
  let mountedApp;
  let props;
  const app = () => {
    if (!mountedApp) {
      mountedApp = mount(
        <App />
      );
    }
    return mountedApp;
  }

  beforeEach(() => {
    props = {
      apiResponse: undefined,
    }
    mountedApp = undefined;
  });


it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

it("always renders a div", () => {
  const divs = app().find("div");
  expect(divs.length).toBeGreaterThan(0);
});

//A Header is always rendered

it("always renders a `Header`", () => {
  expect(app().find(Header).length).toBe(1);
});

//The rendered Header does not recieve any props

describe("rendered `Header`", () => {
  it("does not receive any props", () => {
    const header = app().find(Header);
    expect(Object.keys(header.props()).length).toBe(0);
  });
});

//MealPlannerInput is always rendered

it("always renders a `MealPlannerInput`", () => {
  expect(app().find(MealPlannerInput).length).toBe(1);
});


// API unit testing

/*
describe("when `apiResponse` is defined", () => {
  beforeEach(() => {
    props.apiResponse = jest.fn();s
  });

  it("sets the rendered `MealResultsListing`'s `apiResponse` prop to the same value as `this.state.apiResponse`'", () => {
    const mealResultsListing = app().find(MealResultsListing);
    expect(mealResultsListing.props().apiResponse).toBe(props.apiResponse);
  });
});
*/

describe("when `apiResponse` is undefined", () => {
  beforeEach(() => {
    props.apiResponse = undefined;
  });

  it("sets the rendered `MealResultsListing`'s `apiResponse` prop to undefined'", () => {
    const mealResultsListing = app().find(MealResultsListing);
    expect(mealResultsListing.apiResponse).not.toBeDefined();
  });
});



});

