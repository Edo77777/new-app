import React from 'react';
import './Weather.css';
import Humidity from '../../image/Humidity.png'
import clouds from '../../image/cloud.png';
import Temp from '../../image/temp.png';

//func. component with props and if statment. 
const  MyWeather = (props) => {
  return (
    <div>
      { props.city && props.country &&  <p className="txt"><span>Location:</span> {props.city} {props.country} </p>}
      { props.temperature && <p className="txt"><span>Temperature:</span> {props.temperature}<img className="_1" src={Temp}/> </p>}
      { props.humidity && <p className="txt"><span>Humidity:</span> {props.humidity}<img className="_1" src={Humidity}/> </p>}
      { props.description && <p className="txt"><span>Description:</span> {props.description}<img className="_1" src={clouds}/> </p>}
      { props.error && <p> {props.error} </p>}
      
    </div>
  )
}

export default  MyWeather;