var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading.jsx')

var styles = {
  container: {
    color: '#555'
  },
  header: {
    textAlign: 'center',
    fontSize: '65px',
    fontWeight: 100,
    marginTop: '30px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  dayIcon: {
    height: 130
  },
  dayContent: {
    fontSize: 30,
    fontWeight: 100
  }
};

const ForecastLoaded = (props) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.header}>
        {props.city} Forecast
      </h3>

      <div style={styles.content}>
        {props.forecastData.list.map(function(listItem) {
          return (
            <DailyWeather
              key={listItem.dt}
              dayData={listItem} />
          );
        })}
      </div>
    </div>
  );
};

const DailyWeather = (props) => {
  var icon = props.dayData.weather[0].icon
  var date = props.dayData.dt
  return (
    <div style={styles.dayContainer}>
      <img
        src={"./app/images/weather-icons/" + icon + ".svg"}
        alt="Weather"
        style={styles.dayIcon} />

      <h2 style={styles.dayContent}>
        {date}
      </h2>
    </div>
  )
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
        ? <Loading text="Loading" speed={300} />
        : <ForecastLoaded
            city={this.props.city}
            forecastData={this.props.forecastData} />
    );
  }
});

module.exports = Forecast;
