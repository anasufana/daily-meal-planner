/* eslint class-methods-use-this: ["error", { "exceptMethods": ["validateCalories"] }],
  "react/prop-types": [0, { ignore: ["diets.map"]}]
*/

import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/MealPlannerInput.css';

const MealPlannerInput = props => (
  <div className="meal-planner-input">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit({ ...props });
    }
    }
    >
      <div className="input-container">
        <span className="form-span">Choose your diet</span>
        <select className="dropdown-select" onChange={props.handleDietSelect}>
          {props.diets.map(diet => (
            <option key={diet.value} value={diet.value} defaultValue={diet.selected}>
              { diet.name }
            </option>
          ))
          }
        </select>
      </div>
      <div className="input-container">
        <span className="form-span">Exclude</span>
        <input
          className={props.excludeValue.warning ?
         'form-input-warning form-exclude' : 'form-input-text form-exclude'}
          type="text"
          value={props.excludeValue.value}
          onChange={props.handleExcludeValue}
        /><br />
        <span className={props.excludeValue.warning ? 'form-input-info-warning' : 'display-none'}>
          {props.excludeValue.warningText}
        </span>
        <span className="form-input-info">
          Example: nuts, shallots - separated by comma.<br />
          Leave blank if you don&apos;t want to exclude anything
        </span>
      </div>
      <div className="input-container input-calories-container">
        <span className="form-span">Target calories*</span>
        <input
          className={props.targetCaloriesValue.warning
           ? 'form-input-warning form-calories' : 'form-input-text form-calories'}
          type="text"
          value={props.targetCaloriesValue.value}
          onChange={props.handleTargetCalorieChange}
        /><br />
        <span className={props.targetCaloriesValue.warning
           ? 'form-input-info-warning' : 'form-input-info'}
        >
          {props.targetCaloriesValue.warningText}
        </span>
      </div>
      <button className="submit-btn"type="submit" value="Submit" disabled={(props.targetCaloriesValue.warning || props.excludeValue.warning)}>Go!</button>
    </form>
  </div>
);

MealPlannerInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDietSelect: PropTypes.func.isRequired,
  diets: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  excludeValue: PropTypes.shape({
    value: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired,
    warningText: PropTypes.string.isRequired,
  }).isRequired,
  handleExcludeValue: PropTypes.func.isRequired,
  targetCaloriesValue: PropTypes.shape({
    value: PropTypes.string.isRequired,
    warning: PropTypes.bool.isRequired,
    warningText: PropTypes.string.isRequired,
  }).isRequired,
  handleTargetCalorieChange: PropTypes.func.isRequired,
};


export default MealPlannerInput;
