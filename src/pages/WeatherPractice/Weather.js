import React, { useState } from 'react';

const Weather = () =>{
    const [temperature, setTemperature] = useState();
    const getTemperature = () =>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=-37.814&longitude=144.9633&hourly=temperature_2m')
            .then((response)=>response.json())
            .then((result)=>setTemperature(result))
    }
    const makeHourlyTemperature = (temp)=>{
        let tempString = "";
        if (temp === undefined) return ;
        temp.forEach((value)=>{
            tempString = tempString + value + ", " ;
        })
        return tempString;
    }
    return(
        <div>
            <p>Weather</p>
            <button onClick={() => getTemperature()}>Get Temperature</button>
            <span>{makeHourlyTemperature(temperature?.hourly?.temperature_2m)}</span>
        </div>
    )
}

export default Weather;