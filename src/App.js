import React, { Component } from 'react';
import Nav from './files/Nav';
import Products from './files/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Products/>
      </div>
    );
  }
}

export default App;
