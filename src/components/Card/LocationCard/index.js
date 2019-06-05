import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

export const LocationCard = props => {
  const data = props.data;
  const images = [
    { id: "11014596-71b0-4b3e-b8c0-1c4b15f28b9a" },
    { id: "64a996aa-481e-4627-9624-ab23f59a05a9" },
    { id: "a8bd9c03-7c80-4a97-b7c0-6a668acaf576" },
    { id: "56e423c4-d9a1-44c4-8bdb-1cab45fbf63e" },
    { id: "660c8c91-bd92-43db-b475-b2df6ca96fec" },
    { id: "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f" },
    { id: "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2" },
    { id: "a072ec53-0467-4fac-864f-df234f9c4315" },
    { id: "682df5c3-b09e-46af-94d1-ae0d17f9b4b6" },
    { id: "62346d33-caa0-4c17-8016-0aca56f3066b" },
    { id: "34df8f25-8f80-4823-8f01-bf9852039987" },
    { id: "dbeeaecb-7817-4b8b-90ca-edc432d3033e" },
    { id: "6fc21b76-78fb-4451-98f7-857e32a23e85" },
    { id: "37d13a96-a03a-451d-8871-80be0495486e" },
    { id: "615aa48d-8673-4117-b35a-79cb67af1897" },
    { id: "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e" },
    { id: "0132f7f6-fd52-4ac3-b5df-c96b609f77b6" },
    { id: "0fafa7a3-64c1-43fe-881b-ecb605c01e09" },
    { id: "42f787d8-1fcb-4d3d-82f2-a74409869368" },
    { id: "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d" },
    { id: "ee897b2a-405e-42b9-bff4-8b51b0f03cab" },
    { id: "90241c46-d4be-411f-b00a-7561b9dda7b6" },
    { id: "469b14bd-5565-4436-bbed-c2036f42cc99" },
    { id: "b6bac992-a858-4d57-8477-9652d73caaa1" }
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
        alt="Displays location images for each studio ghibli movie"
      />
      <p>Location Name: {data.name}</p>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
    </article>
  );
};

LocationCard.propTypes = {
  data: PropTypes.object
};
