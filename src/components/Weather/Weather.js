import React, { Component } from 'react';
import Title from './Title';
import MyWeather from './MyWeather';
import Form from './Form';
import './Weather.css';

const API_KEY = "7dde226860ad8cd4b025d8e9eb0273d0";

export default class Weather extends Component {
//my State
   state={
     temperature: undefined,
     city: undefined,
     country:undefined,
     humidity:undefined,
     description:undefined,
     error:undefined
   }
//arrow func. making async await call to get the data
 getWeather = async (e) =>{
//preventDefault -this method is called, the default action of the event will not be triggered.
    e.preventDefault();
    // values from input
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //API call with fetch api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
//if condition is true show new data.
    if( city && country){
      this.setState({
        temperature: data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
        
      })
    }else{
      this.setState({
        error:"please enter the value"
      })
    }
   
  }

  render() {
    return (
      <div className="mainDiv">
        <Title/>
        <Form getWeather={this.getWeather}  />
        <MyWeather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
        <style>{'body { background-image:url(https://images.pexels.com/photos/355810/pexels-photo-355810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) }'}</style>
        </div>
    )
  }
}

 