import React, {Component, PropTypes} from 'react';
import {Doughnut} from 'react-chartjs-2';
import '../css/components/MealCaloriesDonut.css';

class MealCaloriesDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donutData: {
        labels: [
           'Carbs', 
           'Fats', 
           'Proteins'
        ],
        datasets: [{
          data: this.calculatePercentage(),
          backgroundColor: [
            '#FF008E',
            '#124E96',
            '#0D8ABC',
          ],
          borderColor: '#ffffff',
          defaultFontColor: '#000000',
        }],
      },
    };
  }

  calculatePercentage() {
    const carbsCalories = this.props.nutrients.carbohydrates * 4;
    const proteinsCalories = this.props.nutrients.protein * 4;
    const fatCalories = this.props.nutrients.fat * 9;
    const totalPercentage = this.props.nutrients.calories;

    const arrayPercentage = [];

    arrayPercentage.push(Math.round(((carbsCalories * 100) / totalPercentage)));
    arrayPercentage.push(Math.round(((fatCalories * 100) / totalPercentage)));
    arrayPercentage.push(Math.round(((proteinsCalories * 100) / totalPercentage)));
    return arrayPercentage;
  }

  render() {
    return (
      <div className="donut-container">
        <Doughnut ref='chart' 
        data={this.state.donutData}
        options = {
            {maintainAspectRatio : false},
            {legend: {
              display: false,
              position: 'right',
              labels: {
                fontColor: '#000000',
                fontFamily: 'Nanum Gothic',
                fontSize: '14',
              }
            },
          }
        }
        />
      </div>
    );
  }
}

// MealCaloriesDonut.propTypes = {
//   nutrients: PropTypes.objectOf(PropTypes.number),
// }

export default MealCaloriesDonut;

