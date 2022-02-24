import React, { useState } from "react";
import "./weather.scss";

const WeatherForm = ({ onKeypress }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="weather__form">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => handleInput(e)}
        onKeyPress={(e) => onKeypress(e)}
      />
    </form>
  );
};

export default WeatherForm;
