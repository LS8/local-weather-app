const React = require('react');

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
    console.log(this.state.city);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={'weather-form ' + this.props.orientation}>
        <input onChange={this.handleChange} type='text' placeholder='St. George, Utah' value={this.state.city} />
        <button type='submit'>Get Weather</button>
      </form>
    )

  }
};

module.exports = Form;