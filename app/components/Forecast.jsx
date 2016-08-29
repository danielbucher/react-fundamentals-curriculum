var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading.jsx')

function puke (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

var styles = {
  container: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: '55px',
    textAlign: 'center',
    width: '100%',
    marginTop: '30px'
  },
  content: {
    width: '100%',
    paddingLeft: '5px',
    paddingRight: '5px'
  }
};

var Forecast = React.createClass({
  propTypes: {
    city: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    forecastData: PropTypes.object
  },
  render: function() {
    return (
      this.props.loading
        ? <ForecastLoading />
        : <ForecastLoaded
            city={this.props.city}
            forecastData={this.props.forecastData} />
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
    <div style={styles.container}>
      <h3 style={styles.title}>{props.city} Forecast</h3>
      <div style={styles.content}>{puke(props.forecastData)}</div>
    </div>
  );
};

ForecastLoaded.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired
}

module.exports = Forecast;
