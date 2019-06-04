import React from "react";
import "./Card.css";

export const PeopleCard = props => {
  const data = props.data;
  console.log(props)
  return (
    <article className="card">
      <p>Character Name: {data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Age: {data.age}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Hair Color: {data.hair_color}</p>
    </article>
  );
};
