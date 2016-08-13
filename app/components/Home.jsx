var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer.jsx');

const styles = {
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
};

const Home = (props) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Enter a City and a State
      </h1>
      <GetCityContainer />
    </div>
  );
};

module.exports = Home;
