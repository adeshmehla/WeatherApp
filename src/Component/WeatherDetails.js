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
    </div>:null}
      </>
  )
}

export default WeatherDetails