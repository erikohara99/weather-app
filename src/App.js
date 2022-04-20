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
      />
      <WeatherSlab 
        location="New York, NY" 
        weather={weather}
      />
      <WeatherSlab 
        location="Chicago, IL" 
        weather={weather}
      />
    </div>
  );
}

export default App;
