import React, {useState} from 'react';

export default function WeatherSlab(props) {

    const [date, setDate] = useState(new Date());
    const {main, name, sys, weather, wind, zipcode} = props.weather;

    const {id, main: condition, icon} = weather[0];
    let styles = "weather-container ";

    if(id >= 200 && id <= 599) styles += "rainy";
    else if(id >= 600 && id <= 699) styles += "snowy";
    else if(id >= 700 && id <= 799) styles += "haze";
    else if(id == 800) styles += "sunny";
    else if(id >= 801 && id <= 804) styles += "cloudy";

    return ( 
        <div className={styles}>
            <div>
                <h3>{condition}</h3>
                <h3>{name} [{zipcode}]</h3>
                <h3>{date.toLocaleString("default", {month:"long", day: "numeric", year: "numeric"})}</h3>
                <div className="weather-temps">
                    <h1>{Math.round(main.temp)}°</h1>
                    <div>
                        <h2>{Math.round(main.temp_max)}°</h2>
                        <h2>{Math.round(main.temp_min)}°</h2>
                    </div>
                </div>
            </div>
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`}></img>
        </div>
     );
}