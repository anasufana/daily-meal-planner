import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';
import MealResultsListing from './components/MealResultsListing';


const App = () => (
  <div className="App">
    <Header />
    <MealPlannerInput />
    <MealResultsListing />
  </div>
);

export default App;
