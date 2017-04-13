const React = require('react');
const Form = require('./Form');

function Header(props) {
  return (
    <div className='header'>
      <h1>Title</h1>
      <Form orientation='horizontal'/>
    </div>
  )
};

module.exports = Header;
console.log(3)