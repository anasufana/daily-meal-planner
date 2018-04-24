/* global it, expect, jest */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

jest.mock('../App');

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

it('should render MealResultsListing when submit button is called', () => {
  const component = shallow(<App />);
  console.log(component);
  const handleSubmitStub = jest.fn();
  console.log(handleSubmitStub);
  component.find('button').simulate('click');

  return Promise.resolve()
    then(() => {
      component.update();


    })
});
