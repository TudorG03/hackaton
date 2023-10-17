import "./weather.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/weather.context";

const Temperature = () => {
    const { weather } = useContext(WeatherContext);
    
    return (
        <div className="temperature-container">
            Temperature: {weather.temp}
        </div>
    );
};

export default Temperature;