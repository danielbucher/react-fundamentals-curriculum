var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast.jsx');

var ForecastContainer = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      loading: true
    };
  },
  render: function() {
    return (
      <Forecast city={this.props.params.city}
        loading={this.state.loading} />
    );
  }
});

module.exports = ForecastContainer;
