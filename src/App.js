import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGeolocated } from "react-geolocated";
import WeatherCard from "./WeatherCard";

import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "./utils/helperFunctions";

function App() {
  const initialState = getFromLocalStorage("weatherData");

  const [weatherInfo, setWeatherInfo] = useState(initialState);

  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    const { REACT_APP_API_KEY } = process.env;

    if (coords && !weatherInfo) {
      console.log("fetching");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coords.latitude}&lon=${coords.longitude}&appid=${REACT_APP_API_KEY}`
        )
        .then(({ data }) => {
          saveToLocalStorage("weatherData", data);
          setWeatherInfo(data);
        })
        .catch((err) => err);
    }
  }, [coords, weatherInfo]);

  return (
    <div className="App">
      <>
        <h1>
          Weather Forecast for {weatherInfo?.city.name},{" "}
          {weatherInfo?.city.country}{" "}
        </h1>
        <h2></h2>
        <main>
          {weatherInfo?.list.map((info, i) => (
            <WeatherCard {...info} key={i} />
          ))}
        </main>
      </>
    </div>
  );
}

export default App;
