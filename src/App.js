import React, { Component } from 'react';
import './App.css';
import Header from './composants/Header.js';


class App extends Component {
  
state = {
  presentation : [ 
    {
      id: 1, 
      nom: "Josh",
      prenom: "Baptiste",
      age: 24
    },
    {
      id: 2,
      nom: "Julien",
      prenom: "Truc",
      age: 25
    },
    {
      id: 3,
      nom: "Olivier",
      prenom: "Robert",
      age: 26
    }
  ]
}

  rajeunir = () => {
    const nvState = this.state.presentation.map((utilisateurs) => {
      utilisateurs.age = utilisateurs.age - 5;
      return utilisateurs.age;
    })
    this.setState({
      nvState
    })
  }

  render() {
    
    return (
      <div className="App">
        <Header nom={this.state.presentation}/>
        <button onClick={this.rajeunir}>Rajeunir</button>
      </div>
      
    );
  }
}

export default App;
