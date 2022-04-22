import React, {useState} from 'react';

export default function WeatherSlab(props) {

    const [date, setDate] = useState(new Date());
    const {location, weather, condition} = props;

    const styles = "weather-container ";

    if(condition >= 200 && condition <= 599) styles += "rainy";
    else if(condition >= 600 && condition <= 699) styles += "snow";
    else if(condition >= 700 && condition <= 799) styles += "haze";
    else if(condition == 800) styles += "sunny";
    else if(condition >= 801 && condition <= 804) styles += "cloudy";

    return ( 
        <div className={styles}>
            <h3>{condition}</h3>
            <h3>{location}</h3>
            <h3>{date.toLocaleString("default", {month:"long", day: "numeric", year: "numeric"})}</h3>
            <div className="weather-temps">
                <h1>{weather.temp}°</h1>
                <div>
                    <h2>{weather.high}°</h2>
                    <h2>{weather.low}°</h2>
                </div>
            </div>
        </div>
     );
}