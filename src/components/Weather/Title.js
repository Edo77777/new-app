import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
      <div>
        <h1 style={{
          fontFamily: " Federo, sans-serif",
          color:"aliceblue",
          fontSize:"44px",
          background: "#0000000d"
        }}>Weather Finder</h1>
        <h2 style={{
          color:"aliceblue",
          fontSize:"33px",
          background:"#0000000d"
        }}>Current weather and forecasts in your city</h2>
        <br/><br/>
      </div>
    )
  }
}
