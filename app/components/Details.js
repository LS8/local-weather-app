const React = require('react');
const convertDate = require('../utils/date').getDate;

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { hidden: !this.state.hidden };
    })
  }

  render() {
    const day = this.props.day;
    return (
      <ul  onClick={this.handleClick} key={this.props.i}>
          <li><img className='weather-icon' src={'/images/' + day.icon + '.svg'} /></li>
          <li><h3 className='day'>{convertDate(day.date)}</h3></li>
          <ul className={this.state.hidden ? 'hidden details' : 'details'}>
            <li>{day.location}</li>
            <li>{day.description}</li>
            <li>min temp: {day.minTemp}°C</li>
            <li>max temp: {day.maxTemp}°C</li>
            <li>humidity: {day.humidity}</li>
          </ul>
        </ul>
    )
  }
}

module.exports = Details;
// {this.state.active ? 'your_className': null} 