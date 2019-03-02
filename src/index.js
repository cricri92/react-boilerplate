import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

class App extends React.Component {
  render() {
    return (
      <h1>{title}</h1>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
