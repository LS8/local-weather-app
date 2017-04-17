const React = require('react');
const Form = require('./Form');
const Link = require('react-router-dom').Link;

class Header extends React.Component {
  render() {
    return (
      <div className='header row'>
        <h1><Link to='/'>Weather</Link></h1>
        <Form className='hidden-md-down' orientation='horizontal'/>
      </div>
    )
  }
};

module.exports = Header;