import React from 'react';
import '../css/components/MealPlannerInput.css';

const MealPlannerInput = () => (
  <div className="meal-planner-input">
    <form action="">
      <div className="input-container">
        <span className="form-span">Choose your diet</span>
        <select className="dropdown-select">
          <option value="" selected>Good to go!</option>
          <option value="gluten free">Gluten free</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescetarian">Pescetarian</option>
          <option value="paleo">Paleo</option>
        </select>
      </div>
      <div className="input-container">
        <span className="form-span">Exclude:</span>
        <input className="form-input-text" type="text" /><br />
      </div>
      <div className="input-container">
        <span className="form-span">Target calories:</span>
        <input className="form-input-text" type="text" /><br />
      </div>
      <button className="submit-btn"type="submit" value="Submit">Go!</button>
    </form>
  </div>
);

export default MealPlannerInput;
