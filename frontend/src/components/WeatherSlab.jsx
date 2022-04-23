import React, {useState} from 'react';
import Arrow from "../images/arrow.png";

export default function WeatherSlab(props) {

    const [date, setDate] = useState(new Date());
    const {main, name, sys, weather, wind, zipcode} = props.weather;

    const {id, main: condition, icon} = weather[0];
    let styles_weather = "weather-container ";
    let styles_wind = {transform: `rotate(${wind.deg}deg)`};

    if(id >= 200 && id <= 599) styles_weather += "rainy";
    else if(id >= 600 && id <= 699) styles_weather += "snowy";
    else if(id >= 700 && id <= 799) styles_weather += "haze";
    else if(id == 800) styles_weather += "sunny";
    else if(id >= 801 && id <= 804) styles_weather += "cloudy";

    return ( 
        <div className={styles_weather}>
            <div>
                <h3>{condition}</h3>
                <h3>{name} [{zipcode}]</h3>
                <h3>{date.toLocaleString("default", {month:"long", day: "numeric", year: "numeric"})}</h3>
                
                <div className="weather">
                    <div className="temps">
                        <h1>{Math.round(main.temp)}°</h1>
                        <div>
                            <h2>{Math.round(main.temp_max)}°</h2>
                            <h2>{Math.round(main.temp_min)}°</h2>
                        </div>
                    </div>

                    <div className="wind">
                        <h1>{wind.speed.toPrecision(2)} mph</h1>
                        <img style={styles_wind} src={Arrow}></img>
                    </div>
                </div>
            
            </div>
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`}></img>
        </div>
     );
}