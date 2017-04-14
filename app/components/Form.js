const React = require('react');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;
const Redirect = require('react-router').Redirect;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState(() => {
      return { city: value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => {
      return { redirect: true }
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/forecast/' + this.state.city} />;
    }
    return (
      <form onSubmit={this.handleSubmit} className={'weather-form ' + this.props.orientation}>
        <input onChange={this.handleChange} type='text' placeholder='St. George, Utah' value={this.state.city} />
        <button type='submit'>Get Weather</button>
      </form>
    )
  }
};

module.exports = Form;