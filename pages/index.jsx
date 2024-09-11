import { useEffect, useState } from "react";
import axios from "axios";
import Weather_One from "../components/weather";

const apiKey = "882ed5c0d4edb9d485e60c8cb9caf319"

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState("Moscow")


  useEffect(() => {
    if (city) {

      axios
        .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
        .then((res) => {
          setWeatherData(res.data.current);

        })
        .catch((error) => {
          console.error("Error fetching weather data:", error)
          setWeatherData(null)

        });
    } else {
      setWeatherData(null)
    }
  }, [city])

  const handleInputChange = (e) => {
    setCity(e.target.value.trim())
  }
  return (
    <div className="wrap">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search here"
          value={city}
          onChange={handleInputChange}
        />
      </div>

      {weatherData && <Weather_One data={weatherData} city={city} />}

    </div>
  );
}