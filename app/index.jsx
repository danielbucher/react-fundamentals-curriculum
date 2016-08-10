var React = require('react');
var ReactDOM = require('react-dom');

const HelloWorld = () => {
  return (
    <div>
      <p>
        Hello World!
      </p>
    </div>
  )
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
