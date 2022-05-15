import React from 'react'
import './style.css'
function WeatherDetails({data}) {
let we = data.weather[0].icon
console.log(we)
  const myStyle = {
    height: "100%",
    textAlign:"center",
    width: "100%",
    backgroundSize:"cover",
 backgroundImage:`url(${require(`./bg_images/${we}.png`)})` 
}
  return (
    <>

    {data?<div className='App' style={myStyle} id='innerDataBox'>
    <div >
        <h1>{Math.floor(data.main.temp-273.15 )}°</h1>
       <h4>{data.weather[0].main}</h4>
    </div>
        <h1>{data.name}<h6>{data.sys.country}</h6></h1>
        <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Humidity: {data.main.humidity} %</p>
    </div>:null}
      </>
  )
}

export default WeatherDetails