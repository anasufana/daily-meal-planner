/*import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import MealCard from '../components/MealCard';
import '../css/components/MealResultsListing.css';

configure({ adapter: new Adapter() });

describe('Meal Result Listing', () => {
  let component;
  let props;
  let mountedMealCard
  const mealCard = () => {
      if (!mountedMealCard) {
        mountedMealCard = mount(
          <MealCard />
        );
      }
  return mountedMealCard;
 }

  beforeEach(() => {
    component = shallow(<MealCard />);

  });

  it('should render without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

});
*/
