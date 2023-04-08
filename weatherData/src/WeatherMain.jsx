import React from 'react';
import { useState ,useEffect } from 'react';

const URL ="http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal";

function WeatherMain () {
    const [temp ,setTemp] = useState(0);
    const [isLoad , setIsload] = useState(false);
    useEffect(()=>{
        setIsload(true);
        const fetchData = async () =>{
            const result = await fetch(URL);
            result.json()
            .then((dataJson)=>{
                setTemp(dataJson.current.temp_c);
                
                setIsload(false);
            })
        }
        fetchData();
    },[]);
  return (
    <div>
        {isLoad? 'temp is loading' :
        <h2>current temp :{temp}
        </h2>}
    </div>
  );
}

export default WeatherMain;
