var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.jsx');
var api = require('../helpers/api');

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.oneOf(['column', 'row'])
  },
  getDefaultProps: function() {
    return {
      direction: 'column'
    };
  },
  getInitialState: function() {
    return {
      city: ''
    };
  },
  handleSubmitCity: function() {
    api.getWeather(this.state.city);
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    });
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
});

module.exports = GetCityContainer;
