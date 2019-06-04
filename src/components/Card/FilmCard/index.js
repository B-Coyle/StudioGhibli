import React from "react";
import './Card.css';

export const FilmCard = (props) => {
  const data = props.data;
  return (
  <article className="card">
    <p>Movie Name: {data.title}</p>
    <p>Description: {data.description}</p>
    <p>Director: {data.director}</p>
    <p>Producer: {data.producer}</p>
    <p>Release Date: {data.release_date}</p>
  </article>)
};

