const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Hello = require('./Hello');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Hello}/>
          <Route render={function() {
            return <p>Not Found</p>
          }}/>
        </div>
      </Router>
    )
  }
};


module.exports = App;