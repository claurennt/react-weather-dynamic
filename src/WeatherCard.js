import React from "react";
import "./WeatherCard.css";
const WeatherCard = ({
  dt_txt,
  main: { temp_min, temp_max },
  weather: [{ description, icon }],
}) => {
  return (
    <div className="WeatherCard">
      <h2>Weather forecasts for day/time: </h2>
      <h3>{dt_txt}</h3>

      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />

      <p>Minimum temperature: {temp_min}</p>
      <p>Maximum temperature: {temp_max}</p>
    </div>
  );
};

export default WeatherCard;
