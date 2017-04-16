const React = require('react');
const api = require('../utils/api');
const Loading = require('./Loading');
const Details = require('./Details');

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
    // console.log(convertDate(Date.now()));
    const city = this.props.match.params.city;
    if (this.state.loading) {
      return <Loading />
    }
    const forecast = this.state.forecast.map((day, i) => {
      return <Details day={day} key={i}/>
    });
    return (
      <div className='forecast'>
        <h1>{this.state.forecast[0].location}</h1>
        <div className='forecast-days'>
          {forecast}
           </div>
      </div>
    );
  }
}

module.exports = Forecast;