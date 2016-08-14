var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer.jsx');

const Header = (props) => {
  return (
    <div>
      <GetCityContainer direction="row" />
    </div>
  );
};

module.exports = Header;
