import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import FilmCard from '../../components/Card/FilmCard/index';
import LocationCard from '../../components/Card/LocationCard/index';
import PeopleCard from '../../components/Card/PeopleCard/index';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCards: false,
      category: null
    }
  }

  setContainer = () => {
    switch (this.state.category) {
      case "films":
        return <FilmCard />;
      case "locations":
        return <LocationCard />;
      case "characters":
        return <PeopleCard />;
      default:
        return <h2>Error Loading Information</h2>

    }
  }



  handleChange =() => {

  }

  render() {
    return (
      <section className="mainBtns">
        <Route exact path='/films'>
          <button className="button" onClick={this.handleChange} name="films">Films</button>
        </Route>
        <Route exact path='/characters'>
          <button className="button" onClick={this.handleChange} name="characters">Characters</button>
        </Route>
        <Route exact path='/locations'>
          <button className="button" onClick={this.handleChange} name="locations">Locations</button>
        </Route>
      </section>
    );
  }
}

export default MainContainer;
