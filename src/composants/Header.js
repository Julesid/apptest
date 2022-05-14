import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return this.props.nom.map((pres) => 
      <h1 key={pres.id}> {pres.nom} {pres.prenom} {pres.age} ans</h1>
    )
  }
}


