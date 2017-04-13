const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Hello = require('./Hello');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Hello}/>
            <Route render={function() {
              return <p>Not Found</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
};


module.exports = App;