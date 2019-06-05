import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const PeopleCard = props => {
  const data = props.data;
  const images = [
    { id: "ba924631-068e-4436-b6de-f3283fa848f0" },
    { id: "c491755a-407d-4d6e-b58a-240ec78b5061" },
    { id: "591524bc-04fe-4e60-8d61-2425e42ffb2a" },
    { id: "89026b3a-abc4-4053-ab1a-c6d2eea68faa" },
    { id: "91939012-90b9-46e5-a649-96b898073c82" },
    { id: "20e3bd33-b35d-41e6-83a4-57ca7f028d38" },
    { id: "fc196c4f-0201-4ed2-9add-c6403f7c4d32" },
    { id: "3042818d-a8bb-4cba-8180-c19249822d57" },
    { id: "f467e18e-3694-409f-bdb3-be891ade1106" },
    { id: "34277bec-7401-43fa-a00a-5aee64b45b08" },
    { id: "8bccdc78-545b-49f4-a4c8-756163a38c91" },
    { id: "08ffbce4-7f94-476a-95bc-76d3c3969c19" },
    { id: "466bc926-2024-4653-ac63-fe52f2dc8c7b" },
    { id: "6523068d-f5a9-4150-bf5b-76abe6fb42c3" },
    { id: "6b3facea-ea33-47b1-96ce-3fc737b119b8" },
    { id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe" },
    { id: "ca568e87-4ce2-4afa-a6c5-51f4ae80a60b" },
    { id: "a10f64f3-e0b6-4a94-bf30-87ad8bc51607" },
    { id: "3031caa8-eb1a-41c6-ab93-dd091b541e11" },
    { id: "d39deecb-2bd0-4770-8b45-485f26e1381f" },
    { id: "030555b3-4c92-4fce-93fb-e70c3ae3df8b" },
    { id: "87b68b97-3774-495b-bf80-495a5f3e672d" },
    { id: "58d1973f-f247-47d7-9358-e56cb0d2b5a6" },
    { id: "a3d8e70f-46a0-4e5a-b850-db01620d6b92" },
    { id: "116bfe1b-3ba8-4fa0-8f72-88537a493cb9" },
    { id: "ebe40383-aad2-4208-90ab-698f00c581ab" },
    { id: "20e3bd33-b35d-41e6-83a4-57ca7f028d38" },
    { id: "7151abc6-1a9e-4e6a-9711-ddb50ea572ec" },
    { id: "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a" },
    { id: "d5df3c04-f355-4038-833c-83bd3502b6b9" },
    { id: "e9356bb5-4d4a-4c93-aadc-c83e514bffe3" },
    { id: "40c005ce-3725-4f15-8409-3e1b1b14b583" }
  ];
  const image = images.reduce((accum, picture) => {
    if (picture.id === data.id) {
      accum.id = picture.id;
    }
    return accum;
  }, {});
  return (
    <article className="card">
      <img className="film-image" src={`/images/${image.id}.jpg`} alt="Images are for each Studio Ghibli character"/>
      <p>Character Name: {data.name}</p>
      <p>Gender: {data.gender}</p>
      <p>Age: {data.age}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Hair Color: {data.hair_color}</p>
    </article>
  );
};

PeopleCard.propTypes = {
  data: PropTypes.object
}