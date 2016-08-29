var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  loadingContainer: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  loadingContent: {
    textAlign: 'center',
    width: '100%',
    marginTop: '30px',
  }
}

var Forecast = React.createClass({
  propTypes: {
    city: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
  },
  render: function() {
    return (
      this.props.loading
        ? <ForecastLoading text="Loading" speed={300} />
        : <ForecastLoaded city={this.props.city} />
    );
  }
});

var ForecastLoading = React.createClass({
  propTypes: {
    text: PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function() {
    return {
      text: 'Loading',
      speed: 300
    };
  },
  getInitialState: function() {
    return {
      text: this.props.text
    };
  },
  componentDidMount: function() {
    var stopper = this.props.text + "...";

    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.props.text
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function() {
    window.clearInterval(this.interval);
  },
  render: function() {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingContent}>{this.state.text}</p>
      </div>
    );
  }
});

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
