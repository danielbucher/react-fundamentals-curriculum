var React = require('react');
var PropTypes = React.PropTypes;
var Forecast = require('../components/Forecast.jsx');
var api = require('../helpers/api');

var ForecastContainer = React.createClass({
  propTypes: {
    params: PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      loading: true,
      forecastData: {}
    };
  },
  componentDidMount: function() {
    api.getForecast(this.props.params.city)
      .then(function(forecastData) {
        console.log(forecastData);
        this.setState({
          forecastData: forecastData,
          loading: false
        });
      }.bind(this));
  },
  render: function() {
    return (
      <Forecast city={this.props.params.city}
        loading={this.state.loading}
        forecastData={this.state.forecastData} />
    );
  }
});

module.exports = ForecastContainer;
