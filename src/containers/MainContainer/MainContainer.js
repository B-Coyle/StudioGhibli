import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import FilmCard from '../../components/Card/FilmCard/index';
import LocationCard from '../../components/Card/LocationCard/index';
import PeopleCard from '../../components/Card/PeopleCard/index';

export class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCards: false,
      category: null
    }
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

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  films: state.films,
  locations: state.locations,
  people: state.people

})


export default MainContainer;
