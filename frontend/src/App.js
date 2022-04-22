import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherSlab from "./components/WeatherSlab";
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
      <SearchBar onSubmit={handleSubmit}/>
      {cities.length == 0 ? "Add some cities to see their weather!" : cities.map(weather => {
        return <WeatherSlab weather={weather} />;
      })}
    </div>
  );
}

export default App;
