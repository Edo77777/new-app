import React, { Component } from 'react';
import './News.css';
import AutoText from './AutoText';
import Countries from './Countries';
import './AutoText.css';

export default class SearchField extends Component {
  render() {
    return (
      <div>
        <div className="ForCont">
        <h2>This is an alphabetically ordered list of the countries of the world</h2>
        <h2 style={{color: "#d26a6a"}}>if you want more information about countries<br/> 
        please click here<a href="https://www.infoplease.com/world/countries" target="_blank">More information</a></h2>
        <img src='http://www.pngall.com/wp-content/uploads/1/World-Map-PNG-HD.png'/>
        </div>
       <div className ='Appp'>
       <div className='App-Component'>
       <AutoText items={Countries}/>
       </div>
       </div>
       </div>
    )
  }
}