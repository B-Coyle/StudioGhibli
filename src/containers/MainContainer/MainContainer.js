import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
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
}

export default MainContainer;
