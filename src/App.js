
import './App.css';
import React, { useState } from "react";
import WeatherDetails from './Component/WeatherDetails';
import axios from 'axios';
export default function App() {
 let apikey ='ed94c3355a4cedd3c6f5807abf2a25ca' 
 let myStyle ={
  backgroundImage:`url(${require(`./Component/bg_images/02d.png`)})`, 
  height: "100% ",
  width: "100%",
  display: "flex",
  textAlign:"justify",
  flexFlow: "row-reverse wrap",
  alignContent: "space-between",
  justifyContent: "space-around",
  backgroundPosition:"center"

}
 const[city,setCity]=useState('');
 const[data,setData]=useState('');

  const fetchWeather = async(e)=>{
    e.preventDefault();
 const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
setData(response.data);  
myStyle={
  background:"none"
}
}
  return (
    <div className="App" id='card'>
   <div style={myStyle}>
   {data?<WeatherDetails data={data}/>: null}
   <div style={{position: "absolute",top: "363px"}}>
   <h1>React Weather App</h1>
   <form layout="inline" onSubmit={fetchWeather}>
        <input type="text" placeholder='Search..' className='input_class' onChange={(e)=>{setCity(e.target.value)}}/>
     <button id="searchBtn" type='submit'>Search</button>
     </form>
     </div>  
   </div>
    </div>
    
  );
}
