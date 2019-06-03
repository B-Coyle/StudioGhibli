import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { FilmCard } from "../../components/Card/FilmCard/index";
import { LocationCard } from "../../components/Card/LocationCard/index";
import { PeopleCard } from "../../components/Card/PeopleCard/index";

export class MainContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="mainBtns">
        <Route exact path="/films">
          <button className="button" onClick={this.handleChange} name="films">
            Films
          </button>
          <FilmCard films={this.props.film} />
        </Route>
        <Route exact path="/characters">
          <button
            className="button"
            onClick={this.handleChange}
            name="characters"
          >
            Characters
          </button>
          <PeopleCard people={this.props.people} />
        </Route>
        <Route exact path="/locations">
          <button
            className="button"
            onClick={this.handleChange}
            name="locations"
          >
            Locations
          </button>
          <LocationCard locations={this.props.location} />
        </Route>
      </section>
    );
  }
}

export default MainContainer;
