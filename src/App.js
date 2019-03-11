import React, { Component } from 'react';
import Cocktail from './component/cocktail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello world</p>
        <Cocktail />
      </div>
    );
  }
}

export default App;