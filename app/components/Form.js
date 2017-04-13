const React = require('react');

function Form(props) {
  return (
    <form className={'weather-form ' + props.orientation}>
      <input type='text' placeholder='St. George, Utah'/>
      <button type='submit'>Get Weather</button>
    </form>
  )
};

module.exports = Form;