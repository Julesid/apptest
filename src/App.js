import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './composants/Header';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
