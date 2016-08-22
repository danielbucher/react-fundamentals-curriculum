var React = require('react');
var Link = require('react-router').Link;
var GetCityContainer = require('../containers/GetCityContainer.jsx');

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(252, 90, 44, 0.89)',
  color: '#fff',
  padding: 5,
  link: {
    color: "#fff",
    textDecoration: 'none'
  }
};

const Header = (props) => {
  return (
    <div style={styles} >
      <h2 style={{margin: 0}}>
        <Link to="/" style={styles.link}>Awesome Weather App</Link>
      </h2>
      <GetCityContainer direction="row" />
    </div>
  );
};

module.exports = Header;
