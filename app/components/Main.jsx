var React = require('react');

var styles = {
  container: {
    width: '100%',
    height: '92%'
  }
}

const Main = (props) => {
  return (
    <div style={styles.container}>
      <h1>
        Main.jsx Header
      </h1>
      {props.children}
    </div>
  );
};

module.exports = Main;
