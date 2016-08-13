var React = require('react');
var PropTypes = React.PropTypes;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
};

const InputField = (props) => {
  return (
    <input type="text"
      placeholder="São Paulo, SP"
      className="form-control"
      onChange={props.onUpdateCity}
      value={props.city} />
  );
};

const Button = (props) => {
  return (
    <button type="button"
      style={{margin: 10}}
      className="btn btn-success"
      onClick={props.onSubmitCity}>
      {props.children}
    </button>
  );
};

const GetCity = (props) => {
  return (
    <div style={styles.container}>
      <InputField onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button onSubmitCity={props.onSubmitCity}>
        Get Weather
      </Button>
    </div>
  );
};

GetCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
