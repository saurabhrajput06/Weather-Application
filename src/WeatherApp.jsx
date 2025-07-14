import SerchBox from './serchBOx'
import InfoBox from './infoBox'
import { useState } from 'react'

export default function weatherApp(){
    const[weatherInfo , setWeatherInfo]=useState({
 city:"Delhi",
 feelslike:"24.08",
 temp:25.05,
 tempMin:25.05,
 tempMax:25.05,
 humidity:47,
 weather:"haze",

    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (

 <div style={{textAlign:"center"}}> 
    <h1>Weather app</h1>

    <SerchBox  updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>

 </div>       
    )
}