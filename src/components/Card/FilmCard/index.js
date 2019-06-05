import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const FilmCard = props => {
  const data = props.data;
  const images = [
    {id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c"},
    {id: "2baf70d1-42bb-4437-b551-e5fed5a87abe"},
    {id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6"},
    {id: "4e236f34-b981-41c3-8c65-f8c9000b94e7"},
    {id: "5fdfb320-2a02-49a7-94ff-5ca418cae602"},
    {id: "12cfb892-aac0-4c5b-94af-521852e46d6a"},
    {id: "45db04e4-304a-4933-9823-33f389e8d74d"},
    {id: "90b72513-afd4-4570-84de-a56c312fdf81"},
    {id: "112c1e67-726f-40b1-ac17-6974127bb9b9"},
    {id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4"},
    {id: "758bf02e-3122-46e0-884e-67cf83df1786"},
    {id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6"},
    {id: "45204234-adfd-45cb-a505-a8e7a676b114"},
    {id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49"},
    {id: "67405111-37a5-438f-81cc-4666af60c800"},
    {id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa"},
    {id: "dc2e6bd1-8156-4886-adff-b39e6043af0c"},
    {id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e"},
    {id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8"},
    {id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3"}
  ];
  const image = images.reduce((accum, picture) => {
    if (picture.id === data.id) {
      accum.id = picture.id;
    }
    return accum;
  }, {});

  return (
    <article className="card">
      <img
        className="film-image"
        src={`/images/${image.id}.jpg`}
        alt="Displays movie splash posters for each studio ghibli movie"
      />
      <p>Movie Name: {data.title}</p>
      <p>Description: {data.description}</p>
      <p>Director: {data.director}</p>
      <p>Producer: {data.producer}</p>
      <p>Release Date: {data.release_date}</p>
    </article>
  );
};

FilmCard.propTypes = {
  data: PropTypes.object
};
