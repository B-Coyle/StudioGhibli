import React from "react";
import './Card.css'

export const PeopleCard = ({ character }) => {
  return (
  <article className="card">
    <p>Character Name: {character.name}</p>
    <p>Gender: {character.gender}</p>
    <p>Age: {character.age}</p>
    <p>Eye Color: {character.eye_color}</p>
    <p>Hair Color: {character.hair_color}</p>
  </article>)
};
