import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const LocationCard = props => {
  const data = props.data;
  return (
    <article className="card">
      <p>Location Name: {data.name}</p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
    </article>
  );
};

LocationCard.propTypes = {
  data: PropTypes.object
};
