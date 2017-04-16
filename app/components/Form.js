const React = require('react');
const Redirect = require('react-router').Redirect;
const Button = require('./Button');
const Input = require('./Input');

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
      return <Redirect push to={'/forecast/' + this.state.city} />;
    }
    return (
      <form onSubmit={this.handleSubmit} className={'weather-form ' + this.props.orientation}>
        <Input city={this.state.city} handleChange={this.handleChange} />
        <Button/>
      </form>
    )
  }
};

module.exports = Form;