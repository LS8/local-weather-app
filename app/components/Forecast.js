const React = require('react');
const api = require('../utils/api');

class Forecast extends React.Component {
  render() {
    const city = this.props.match.params.city;
    console.log(city);
    return (
      <div>
        Forecast component: {city}
      </div>
    );
  }
}

module.exports = Forecast;