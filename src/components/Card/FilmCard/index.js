import React from "react";
import "./Card.css";

export const FilmCard = props => {
  const data = props.data;
  const images = [
    {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"
    },
    {
      id: "12cfb892-aac0-4c5b-94af-521852e46d6a"
    }
  ];
  const image = images.reduce((accum, picture) => {
    if (picture.id === data.id) {
      accum.id = picture.id;
    }
    return accum;
  }, {});
  
  return (
    <article className="card">
      <img className="film-image" src={`/images/${image.id}.jpg`} />
      <p>Movie Name: {data.title}</p>
      <p>Description: {data.description}</p>
      <p>Director: {data.director}</p>
      <p>Producer: {data.producer}</p>
      <p>Release Date: {data.release_date}</p>
    </article>
  );
};
