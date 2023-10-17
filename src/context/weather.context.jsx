import { createContext, useState } from "react";

export const WeatherContext = createContext({
    weather: [],
    setWeather: () => {},
    isLoading: true,
    setIsLoading: () => {}
});

export const WeatherProvider = ({children}) => {
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const value = { weather, setWeather, isLoading, setIsLoading };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}
