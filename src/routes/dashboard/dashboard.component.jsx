import "./dashboard.styles.css";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const [weather, setWeather] = useState([]);
    const [count, setCount] = useState(0);
    const apiKey = '8f7cc12e9c78aeed7c9319935cffa940';
    const city = 'Bucharest';

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeout(() =>{
                setCount(count + 1);
            }, 180000000);
        });

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
            .then(response => response.json())
            .then(coord => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`)
            })

        return () => clearInterval(interval);
    }, [count]);
    return (
        <div className="dashboard-container">
            
        </div>
    );
};

export default Dashboard;