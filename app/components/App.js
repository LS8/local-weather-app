const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Home = require('./Home');
const Forecast = require('./Forecast');
const Header = require('./Header');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/forecast/:city' component={Forecast}/>
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