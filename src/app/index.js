import React from "react";
import './styles/App.css';

const title = 'Title changed';

class App extends React.Component {
  render() {
    return (
      <h1>{title}</h1>
    )
  }
}

export default App;