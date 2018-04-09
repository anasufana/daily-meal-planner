import React from 'react';
import './css/App.css';
import Header from './components/Header';
import MealPlannerInput from './components/MealPlannerInput';

const App = () => (
  <div className="App">
    <Header />
    <MealPlannerInput />
  </div>
);

export default App;
