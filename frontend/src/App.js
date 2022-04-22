import './App.css';
import SearchBar from './components/SearchBar';
import WeatherSlab from "./components/WeatherSlab";
const axios = require("axios");

function App() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const zipcode = document.getElementById("zipsearch").value;
    const result = await axios.get(`http://localhost:3000/api/weather?zipcode=${zipcode}`);
    console.log(result);
  }

  const weather = {
    temp: 21,
    high: 25,
    low: 18
  }

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit}/>
      <WeatherSlab 
        location="San Francisco, CA" 
        weather={weather}
        condition="sunny"
      />
      <WeatherSlab 
        location="New York, NY" 
        weather={weather}
        condition="cloudy"
      />
      <WeatherSlab 
        location="Chicago, IL" 
        weather={weather}
        condition="rainy"
      />
    </div>
  );
}

export default App;
