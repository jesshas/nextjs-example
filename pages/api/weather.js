import React, { useState } from 'react';
import config from '../../config.json';
import Conditions from './conditions';

const Weather = () => {
    let [zip, setZip] = useState('');
    let [unit, setUnit] = useState('imperial');
   let [responseObj, setResponseObj] = useState({});
   const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${config.apiKey}`

    function getWeatherByZipCode(e) {
        e.preventDefault();
        fetch(weatherUrl).then(response => response.json())
        .then(response => {
            setResponseObj(response)
        })

    }
    return (
        <div>
           
           <form onSubmit={getWeatherByZipCode}>
                <input
                    type="text"
                    placeholder="Enter Zip"
                    maxLength="10"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    />
                    <button type="submit">Get Weather!</button>
            </form>
           <Conditions
               responseObj={responseObj}
               />
       </div>
    )

}
export default Weather;