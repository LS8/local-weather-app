const React = require('react');
const api = require('../utils/api');
const Loading = require('./Loading');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      forecast: null,
      loading: true
    }
  }
  
  componentDidMount() {
    const city = this.props.match.params.city;
    api.forecastWeather(city)
      .then((forecast) => {
        this.setState(function() {
          return { 
            forecast: forecast,
            loading: false
           };
        }
      )});
  }

  render() {
    const city = this.props.match.params.city;
    if (this.state.loading) {
      return <Loading />
    }
    const forecast = this.state.forecast.map((day, i) => {
      return (
        <ul key={i}>
          <li>{day.icon}</li>
          <li><img src={'https://github.com/ReactTraining/react-fundamentals-curriculum/blob/master/app/images/weather-icons/' + day.icon + '.svg'} alt='Weather' /></li>
          <li>{day.location}</li>
          <li>{day.description}</li>
          <li>min temp: {day.minTemp}°C</li>
          <li>max temp: {day.maxTemp}°C</li>
          <li>humidity: {day.humidity}</li>
        </ul>
      )
    });
    return (
        <div className='forecast'>
          {forecast}
        </div>
    );
  }
}

module.exports = Forecast;