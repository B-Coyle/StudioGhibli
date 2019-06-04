import React from "react";
import './Card.css';

export const PeopleCard = ({ people }) => {
  return (
  <article className="card">
    <p>Character Name: {people.name}</p>
    <p>Gender: {people.gender}</p>
    <p>Age: {people.age}</p>
    <p>Eye Color: {people.eye_color}</p>
    <p>Hair Color: {people.hair_color}</p>
  </article>)
};
