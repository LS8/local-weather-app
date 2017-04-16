const React = require('react');
const Redirect = require('react-router').Redirect;

class Header extends React.Component {
  constructor() {
    super();
    this.state = { redirect: false };
    this.redirect = this.redirect.bind(this);
  }
  redirect() {
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    return (
      <div className='header'>
        <h1>Title</h1>
        <button id='home-button' onClick={this.redirect}>Home</button>
      </div>
    )
  }
};

module.exports = Header;