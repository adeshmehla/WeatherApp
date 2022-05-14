
import './App.css';
import React, { useState } from "react";
import WeatherDetails from './Component/WeatherDetails';
import axios from 'axios';
export default function App() {
 let apikey ='ed94c3355a4cedd3c6f5807abf2a25ca' 
 let myStyle ={
  backgroundImage:`url(${require(`./Component/bg_images/02d.png`)})`, 
  height: "400px"
}
 const[city,setCity]=useState('');
 const[data,setData]=useState('');

  const fetchWeather = async(e)=>{
    e.preventDefault();
 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
setData(response.data);  
myStyle ={
  backgroundColor:"white",
  height: "400px"
}
}

  return (
    <div className="App" id='card'>
   <div style={myStyle}>
   {data?<WeatherDetails data={data}/>:null}
   <h1>React Weather App</h1>
   <form layout="inline" onSubmit={fetchWeather}>
        <input type="text"  onChange={(e)=>{setCity(e.target.value)}}/>
     <button type='submit'>Search</button>
     </form>  
   </div>
    </div>
    
  );
}
