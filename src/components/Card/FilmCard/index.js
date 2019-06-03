import React from "react";
import './Card.css'

export const FilmCard = ({ film }) => {
  return (
  <article className="card">
    <p>Movie Name: {film.title}</p>
    <p>Description: {film.desription}</p>
    <p>Director: {film.director}</p>
    <p>Producer: {film.producer}</p>
    <p>Release Date: {film.release_date}</p>
  </article>)
};
