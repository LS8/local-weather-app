const React = require('react');
const api = require('../utils/api');
const Loading = require('./Loading');
const Header = require('./Header');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      loading: true
    }
  }
  
  componentDidMount() {
    const city = this.props.match.params.city;
    api.forecastWeather(city)
      .then((forecast) => {
        console.log(forecast);
        this.setState(function() {
          return { loading: false };
        }
      )});
  }

  render() {
    const city = this.props.match.params.city;
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <div>
        <Header />
        <div>
          Forecast component: {city}
        </div>
      </div>
    );
  }
}

module.exports = Forecast;