var React = require('react');
var GetCity = require('./GetCity.jsx');

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  }
}

const Home = () => {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.header}>
          Enter a City and a State
        </h1>
        <GetCity />
      </div>
    </div>
  );
};

module.exports = Home;
