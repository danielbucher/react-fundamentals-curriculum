var React = require('react');

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
      className="form-control" />
  );
};

const Button = (props) => {
  return (
    <button type="button" className="btn btn-success">
      {props.children}
    </button>
  );
};

const GetCity = (props) => {
  return (
    <div style={styles.container}>
      <InputField />
      <Button>
        Get Weather
      </Button>
    </div>
  );
};

module.exports = GetCity;
