const React = require('react');
const Form = require('./Form');

class Home extends React.Component {
  render() {
    return (
      <div className='center'>
        <p className='emphasis'>Enter a City and State</p>
        <Form orientation='vertical'/>
      </div>
    )
  }
};

module.exports = Home;