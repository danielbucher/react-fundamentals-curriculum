var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast.jsx');

var ForecastContainer = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },
  render: function() {
    return (
      <Forecast city={this.props.params.city} />
    );
  }
});

module.exports = ForecastContainer;
