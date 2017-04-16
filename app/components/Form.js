const React = require('react');
const Button = require('./Button');
const Input = require('./Input');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
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
    const origin = window.location.origin;
    window.location = origin + '/forecast/' + this.state.city;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={'weather-form ' + this.props.orientation}>
        <Input city={this.state.city} handleChange={this.handleChange} />
        <Button/>
      </form>
    )
  }
};

module.exports = Form;