import React from "react";
import PropTypes from "prop-types";

const Visibility = ({ icon, title }) => {
  return (
    <div className="weather__visibility__item">
      <div className="weather__visibility__item__icon">{icon}</div>
      <div className="weather__visibility__item__title">{title}</div>
    </div>
  );
};

Visibility.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Visibility;
