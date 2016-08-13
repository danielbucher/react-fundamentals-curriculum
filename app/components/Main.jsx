var React = require('react');

const HelloWorld = (props) => {
  return (
    <div>
      <h2>
        Main.jsx Header
      </h2>
      {props.children}
    </div>
  );
};

module.exports = HelloWorld;
