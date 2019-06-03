import React from "react";
import './Card.css'

export const FilmCard = ({ films }) => {
  return (
  <article className="card">
    <p>Movie Name: {films.title}</p>
    <p>Description: {films.desription}</p>
    <p>Director: {films.director}</p>
    <p>Producer: {films.producer}</p>
    <p>Release Date: {films.release_date}</p>
  </article>)
};
