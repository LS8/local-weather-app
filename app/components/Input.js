const React = require('react');

function Input (props) {
  return <input onChange={props.handleChange} type='text' placeholder='St. George, Utah' value={props.city} />;
}

module.exports = Input; 