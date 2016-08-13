var React = require('react');

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
  }
}

const Home = () => {
  return (
    <div style={styles.container}>
      <p>Home!</p>
    </div>
  );
};

module.exports = Home;
