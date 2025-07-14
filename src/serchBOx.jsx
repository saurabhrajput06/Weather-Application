import "./searchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import js from "@eslint/js";

export  default function searchBox({updateInfo}){
let [city , setCity]=useState("");
let [error , setError]=useState(false);

let URL= "https://api.openweathermap.org/data/2.5/weather";
let API_key= "9e467a9e2bdb2636ff75bd34c2c8a3b5";

let getWeatherInfo= async ()=>{
    try{
        let responce= await fetch(`${URL}?q=${city}&appid=${API_key}&units= "metric"`);
        let jsonResponce=await responce.json();
        let result ={
         city:city,
         temp:jsonResponce.main.temp,
         tempMIn : jsonResponce.main.temp_min,
         tempMax: jsonResponce.main.temp_max,
         humidity : jsonResponce.main.humidity,
         feelsLike :jsonResponce.main.feels_like,
         weather :jsonResponce.weather[0].description,
     
        };
        console.log(result);
        return result;
     }
     catch(err){
        throw(err);
        

     }

}
    
  


let handleChange=(event)=>{
    setCity(event.target.value);
}
let handleClick= async(event)=>{
    try{
        event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo= await getWeatherInfo();
    updateInfo(newInfo);

    }
    catch(err){
        setError(true);

    }
    


}


    return (
            <div className='container'>
                
                <form onSubmit={handleClick}>
                <TextField id="City" label="City" variant="outlined"  value={city} onChange={handleChange}/>
                <br /><br />
                <Button variant="contained"  type="submit"> Search</Button>
                {error && <p style={{color:"red"}}>No such place exit </p>}
            
                </form>
            </div>
    )
}