import React from "react";
import PropTypes from "prop-types";
import { FilmCard } from "../../components/Card/FilmCard/index";
import { PeopleCard } from "../../components/Card/PeopleCard/index";
import { LocationCard } from "../../components/Card/LocationCard/index";
import "./MainContainer.css";

export const MainContainer = ({ data, type }) => {
  const filmCard = data.map(i => {
    let result;
    if (type === "films") {
      result = <FilmCard data={i} key={i.id} />;
    } else if (type === "people") {
      result = <PeopleCard data={i} key={i.id} />;
    } else {
      result = <LocationCard data={i} key={i.id} />;
    }
    return result;
  });
  return <section className="card-section">{filmCard}</section>;
};

export default MainContainer;

MainContainer.propTypes = {
  data: PropTypes.array
};
