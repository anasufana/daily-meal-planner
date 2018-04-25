/*eslint class-methods-use-this: ["error", { "exceptMethods": ["validateCalories"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/MealPlannerInput.css';

class MealPlannerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      targetCaloriesValue:
        {
          value: '',
          warning: true,
          warningText: 'Healthy target should be between 1000 and 3500',
        },
      excludeValue:
        {
          value: '',
          warning: false,
          warningText: 'Your exclude options are not valid. Try again.',
        },
      diets: [
        { value: '', name: 'Good to go!', selected: true },
        { value: 'gluten free', name: 'Gluten free', selected: false },
        { value: 'ketogenic', name: 'Ketogenic', selected: false },
        { value: 'vegetarian', name: 'Vegetarian', selected: false },
        { value: 'vegan', name: 'Vegan', selected: false },
        { value: 'pescetarian', name: 'Pescetarian', selected: false },
        { value: 'paleo', name: 'Paleo', selected: false },
      ],
    };

    this.handleTargetCalorieChange = this.handleTargetCalorieChange.bind(this);
    this.handleExcludeValue = this.handleExcludeValue.bind(this);
    this.handleDietSelect = this.handleDietSelect.bind(this);
    this.validateCalories = this.validateCalories.bind(this);
  }
  validateCalories(calories) {
    if (calories >= 1000 && calories <= 3500) {
      return false;
    }
    return true;
  }

  handleTargetCalorieChange(e) {
    const targetCalories = e.target.value;
    const warning = this.validateCalories(targetCalories);
    this.setState({
      targetCaloriesValue: { ...this.state.targetCaloriesValue, value: e.target.value, warning },
    });
  }

  handleExcludeValue(e) {
    const excludeText = e.target.value;
    let warning = false;

    //  Tests if the exclude text includes only characters, commas and spaces
    if (excludeText && !/^[a-zA-Z ,]+$/.test(excludeText)) {
      warning = true;
    }
    this.setState({ excludeValue: { ...this.state.excludeValue, value: e.target.value, warning } });
  }

  handleDietSelect(e) {
    const dietSelectedBefore = this.state.diets.filter(diet => diet.selected === true);
    const dietSelectedNow = this.state.diets.filter(diet => diet.value === e.target.value);
    const dietFiltered = this.state.diets.filter(diet =>
      diet.value !== e.target.value && diet.selected !== true);

    this.setState({
      diets:
      [...dietFiltered,
        { ...dietSelectedBefore[0], selected: false },
        { ...dietSelectedNow[0], selected: true }
      ]
    });
  }


  render() {
    return (
      <div className="meal-planner-input">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit({...this.state});
        }
        }
        >
          <div className="input-container">
            <span className="form-span">Choose your diet</span>
            <select className="dropdown-select" onChange={this.handleDietSelect}>
              {this.state.diets.map(diet => (
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
              className={this.state.excludeValue.warning ?
             'form-input-warning form-exclude' : 'form-input-text form-exclude'}
              type="text"
              value={this.state.excludeValue.value}
              onChange={this.handleExcludeValue}
            /><br />
            <span className={this.state.excludeValue.warning ? 'form-input-info-warning' : 'display-none'}>
              {this.state.excludeValue.warningText}
            </span>
            <span className="form-input-info">
              Example: nuts, shallots - separated by comma.<br />
              Leave blank if you don&apos;t want to exclude anything
            </span>
          </div>
          <div className="input-container input-calories-container">
            <span className="form-span">Target calories*</span>
            <input
              className={this.state.targetCaloriesValue.warning
               ? 'form-input-warning form-calories' : 'form-input-text form-calories'}
              type="text"
              value={this.state.targetCaloriesValue.value}
              onChange={this.handleTargetCalorieChange}
            /><br />
            <span className={this.state.targetCaloriesValue.warning
               ? 'form-input-info-warning' : 'form-input-info'}
            >
              {this.state.targetCaloriesValue.warningText}
            </span>
          </div>
          <button className="submit-btn"type="submit" value="Submit" disabled={(this.state.targetCaloriesValue.warning || this.state.excludeValue.warning)}>Go!</button>
        </form>
      </div>
    );
  }
}

MealPlannerInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MealPlannerInput;
