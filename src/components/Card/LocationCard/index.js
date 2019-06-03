import React from "react";
import './Card.css'

export const LocationCard = ({ location }) => {
  return (
  <article className="card">
    <p>Location Name: {location.name}</p>
    <p>Climate: {location.climate}</p>
    <p>Terrain: {location.terrain}</p>
  </article>)
};
