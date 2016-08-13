var React = require('react');
var GetCity = require('../components/GetCity.jsx');

var GetCityContainer = React.createClass({
  getInitialState: function() {
    return {
      city: ''
    };
  },
  handleSubmitCity: function() {
    var logMessage = "Hi there, I'm a function and should handle submiting the city:";
    console.log(logMessage + this.state.city);
    return null;
  },
  handleUpdateCity: function(e) {
    console.log(e);
    this.setState({
      city: e.target.value
    });
  },
  render: function() {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
});

module.exports = GetCityContainer;
