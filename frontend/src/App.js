import './App.css';
import WeatherSlab from "./components/WeatherSlab";

function App() {

  const weather = {
    temp: 21,
    high: 25,
    low: 18
  }

  return (
    <div className="App">
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
