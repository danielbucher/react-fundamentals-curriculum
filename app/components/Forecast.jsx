var React = require('react');
var PropTypes = React.PropTypes;

const Forecast = (props) => {
  return (
    <div>
      <h3>Forecast component</h3>
      <p>City: {props.city}</p>
    </div>
  );
};

Forecast.propTypes = {
  city: PropTypes.string.isRequired
}

module.exports = Forecast;
