const React = require('react');
const Form = require('./Form');

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1>Weather</h1>
        <Form orientation='horizontal'/>
      </div>
    )
  }
};

module.exports = Header;