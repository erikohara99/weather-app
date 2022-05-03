import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherSlab from "./components/WeatherSlab";
import Header from './components/Header';
const axios = require("axios");

function App() {

  const [cities, setCities] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const zipcode = document.getElementById("zipsearch").value;
    const {data} = await axios.get(`http://localhost:3000/api/weather?zipcode=${zipcode}`);
    setCities([...cities, data]);
  }

  return (
    <div className="App">
      <Header onSubmit={handleSubmit} />

      {cities.length === 0 ? <h4>Add some cities to see their weather!</h4> : cities.map(weather => {
        return <WeatherSlab weather={weather} />;
      })}
      
      <h5>*All times are local to the current machine.</h5>
    </div>
  );
}

export default App;
