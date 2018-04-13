import React from 'react';
import '../css/components/MealPlannerInput.css';

class MealPlannerInput extends React.Component {
  constructor() {
    super();
    this.state = {
      targetCaloriesValue: '',
      diets: [
        { value: '', name: 'Good to go!', selected: true },
        { value: 'gluten free', name: 'Gluten free', selected: false },
        { value: 'ketogenic', name: 'Ketogenic', selected: false },
        { value: 'vegetarian', name: 'Vegetarian', selected: false },
        { value: 'vegan', name: 'Vegan', selected: false },
        { value: 'pescetarian', name: 'Pescetarian', selected: false },
        { value: 'paleo', name: 'Paleo', selected: false },
        { value: 'gluten free', name: 'Gluten free', selected: false },
      ],
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
              {this.state.diets.map(diet => (
                <option key={diet.value} value={diet.value} selected={diet.selected}>
                  { diet.name }
                </option>
              ))
              }
            </select>
          </div>
          <div className="input-container">
            <span className="form-span">Exclude</span>
            <input
              className="form-input-text form-exclude"
              type="text"
            /><br />
            <span className="form-input-info">
              Example: nuts, shallots - separated by comma.<br />
              Leave blank if you don&apos;t want to exclude anything
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
