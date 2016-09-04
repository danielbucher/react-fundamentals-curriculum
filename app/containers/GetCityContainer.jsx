var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity.jsx');

var GetCityContainer = React.createClass({
  propTypes: {
    direction: PropTypes.oneOf(['column', 'row'])
  },
  contextTypes: {
    router: React.PropTypes.object
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
    const encodedCity = encodeURIComponent(this.state.city);
    const path = "/forecast/" + encodedCity;

    this.context.router.push(path);
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
