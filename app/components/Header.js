const React = require('react');
const Form = require('./Form');

class Header extends React.Component {
  render() {
    return (
      <div className='header row'>
        <h1>Weather</h1>
        <Form className='hidden-md-down' orientation='horizontal'/>
      </div>
    )
  }
};

module.exports = Header;