import React, { useEffect, useState } from "react";
import WeatherForm from "./WeatherForm";
import "./weather.scss";
import Visibility from "./Visibility";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import axios from "axios";

import cold from "../assets/cold.png";
import hot from "../assets/hot.png";

const Weather = (props) => {
  const [weather, setWeather] = useState({});

  const visibility = [
    {
      id: 1,
      icon: <RemoveRedEyeOutlinedIcon />,
      title: `${weather && weather.visibility} m`,
    },
    {
      id: 2,
      icon: <AirOutlinedIcon />,
      title: `${weather.wind && weather.wind.speed} m/s`,
    },
    {
      id: 3,
      icon: <WbSunnyOutlinedIcon />,
      title: `${weather.main && weather.main.humidity} %`,
    },
  ];

  const [input, setInput] = useState("ho chi minh");

  useEffect(() => {
    try {
      const fetch = async () => {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
        );
        setWeather(res.data ? res.data : {});
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, [input]);

  const onKeypress = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      setInput(e.target.value);
    }
  };

  return (
    <div
      className="weather"
      style={
        weather.main && Math.trunc(weather.main.temp) < 18
          ? { background: `url(${cold}) no-repeat center` }
          : { background: `url(${hot}) no-repeat center` }
      }
    >
      <WeatherForm onKeypress={onKeypress} />
      <div className="weather__info">
        <div className="weather__info__name">
          {weather.name} ,
          <span className="weather__info__name__country">
            {weather.sys && weather.sys.country}
          </span>
        </div>
        <div className="weather__info__timer">
          {new Date().toLocaleString("vi")}
        </div>
        <div className="weather__info__value">
          <div className="weather__info__value__name">
            {weather.main && Math.trunc(weather.main.temp)}
            <sup>o</sup>C
          </div>
        </div>
        <div className="weather__info__subtitle">
          {weather.weather && weather.weather[0].main}
        </div>
        <div className="weather__visibility">
          {visibility.map((item) => (
            <Visibility key={item.id} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
