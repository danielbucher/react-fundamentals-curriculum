var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading.jsx')


var Forecast = React.createClass({
  propTypes: {
    city: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  },
  render: function() {
    return (
      this.props.loading
        ? <ForecastLoading />
        : <ForecastLoaded city={this.props.city} />
    );
  }
});

const ForecastLoading = () => {
  return (
    <Loading text="Loading" speed={300} />
  );
};

const ForecastLoaded = (props) => {
  return (
    <div>
      <h3>Forecast component</h3>
      <p>City: {props.city}</p>
    </div>
  );
};

ForecastLoaded.propTypes = {
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
