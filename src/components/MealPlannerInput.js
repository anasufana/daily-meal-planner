import React from 'react';
import '../css/components/MealPlannerInput.css';

class MealPlannerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetCaloriesValue: '',
    };

    this.handleTargetCalorieChange = this.handleTargetCalorieChange.bind(this);
  }
  handleTargetCalorieChange(e) {
    this.setState({ targetCaloriesValue: e.target.value });
  }
  render() {
    return (
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
            <span className="form-span">Exclude</span>
            <input
              className="form-input-text form-exclude"
              type="text"
            /><br />
            <span className="form-input-info">
              Example: nuts, shallots - separated by comma. Leave blank if you don&apos;t want to exclude anything
            </span>
          </div>
          <div className="input-container">
            <span className="form-span">Target calories*</span>
            <input
              className="form-input-text"
              type="text"
              value={this.state.targetCaloriesValue}
              onChange={this.handleTargetCalorieChange}
            /><br />
            <span className="form-input-info">
              Healthy target should be between 1000 and 3500
            </span>
          </div>
          <button className="submit-btn"type="submit" value="Submit" disabled={!this.state.targetCaloriesValue}>Go!</button>
        </form>
      </div>
    );
  }
}

export default MealPlannerInput;
