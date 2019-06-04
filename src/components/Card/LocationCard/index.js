import React from "react";
import "./Card.css";

export const LocationCard = (props) => {
  const data = props.data;
  return (
    <article className="card">
      <p>Location Name: {data.name}</p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
    </article>
  );
};
