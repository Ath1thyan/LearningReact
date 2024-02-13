import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState(null);

  useEffect(() => {
    const weatherAPI = async () => {
      try {
        const res = await axios.get('http://api.geonames.org/findNearByWeatherJSON?lat=10.921389325&lng=77.30262575&username=arun');
        setName(JSON.stringify(res.data));

      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    weatherAPI();
  }, []);

  return (
    <div className="App">
      <h1>Weather Data:</h1>
      <p>{name}</p>
      {/* <p>{setName}</p> */}
      
    </div>
  );
}

export default App;
