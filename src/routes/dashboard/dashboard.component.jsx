import "./dashboard.styles.css";
import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../../context/weather.context";

import Temperature from "../../components/weather/temperature.component";

const Dashboard = () => {
  const { setWeather, setIsLoading, isLoading } = useContext(WeatherContext);
  const apiKey = "8f7cc12e9c78aeed7c9319935cffa940";
  const city = "Bucharest";

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((coord) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0].lat}&lon=${coord[0].lon}&appid=${apiKey}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => {
            setWeather(data.main);
            setIsLoading(false);
          });
      });
  }, []);

  return (
    <div className="dashboard-container">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <Temperature />
      )}
    </div>
  );
};

export default Dashboard;
