var React = require('react');
var Header = require('../components/Header.jsx');

var HeaderContainer = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
      </div>
    )
  }
});

module.exports = HeaderContainer;
