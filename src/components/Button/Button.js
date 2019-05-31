import React from "react";
import "./Button.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <section className="mainBtns">
      <Link to="/films">
        <button className="button">Films</button>
      </Link>
      <Link to="/characters">
        <button className="button">Characters</button>
      </Link>
      <Link to="/locations">
        <button className="button">Locations</button>
      </Link>
    </section>
  );
}
