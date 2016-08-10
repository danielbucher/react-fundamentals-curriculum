var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Main = require('./containers/Main.jsx');

var routes = (
  <Router history={hashHistory} >
    <Route path="/" component={Main} >
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
