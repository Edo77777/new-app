 import React from 'react';
//functional component for info & print on screen
const Form = (props) =>{
    return(
        //form & input with name ,to take the value from input
        <div>
        <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City"/>
        <input type="text" name="country" placeholder="Country"/>
         <button>Find Weather</button>
        </form>
        </div>
    )
}


export default Form;