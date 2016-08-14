var React = require('react');
var HeaderContainer = require('./HeaderContainer.jsx');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

var Main = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <HeaderContainer />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
