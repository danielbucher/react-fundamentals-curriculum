var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer.jsx');

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'rgba(252, 90, 44, 0.89)',
  color: '#fff',
  padding: 5
};

const Header = (props) => {
  return (
    <div style={styles} >
      <h2 style={{margin: 0}}>Olar, sou um app</h2>
      <GetCityContainer direction="row" />
    </div>
  );
};

module.exports = Header;
