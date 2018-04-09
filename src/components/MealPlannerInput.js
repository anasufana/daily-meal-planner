import React from 'react';

const MealPlannerInput = () => (
  <div className="meal-planner-input">
    <select className="dropdown-select">
      <option value="" selected>Good to go!</option>
      <option value="gluten free">Gluten free</option>
      <option value="ketogenic">Ketogenic</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="pescetarian">Pescetarian</option>
      <option value="paleo">Paleo</option>
    </select>

    <form action="">
      <span className="form-span">Exclude:</span><input type="text" /><br />
      <span className="form-span">Target calories:</span><input type="text" /><br />
      <button className="submit-btn"type="submit" value="Submit">Go!</button>
    </form>
  </div>
);

export default MealPlannerInput;