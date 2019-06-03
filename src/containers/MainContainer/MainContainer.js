import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { fetchFilms } from "../../thunks/fetchFilms";
import { fetchLocations } from "../../thunks/fetchLocations";
import { fetchPeople } from "../../thunks/fetchPeople";
import FilmCard from "../../components/Card/FilmCard/index";
import LocationCard from "../../components/Card/LocationCard/index";
import PeopleCard from "../../components/Card/PeopleCard/index";
import { connect } from "react-redux";

export class MainContainer extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    this.props.fetchFilms();
    this.props.fetchLocations();
    this.props.fetchPeople();
  }

  render() {
    const { hasErrored, isLoading, films, locations, people } = this.props;
    return (
      <section className="mainBtns">
        {hasErrored && <h2>Error loading information</h2>}
        {isLoading && <h2>Please wait- information loading ...</h2>}
        <Route exact path="/films">
          <button className="button" onClick={this.handleChange} name="films">
            Films
          </button>
          <FilmCard films={films}/>
        </Route>
        <Route exact path="/characters">
          <button className="button" onClick={this.handleChange} name="characters">Characters</button>
          <PeopleCard people={people}/>
        </Route>
        <Route exact path="/locations">
          <button
            className="button"
            onClick={this.handleChange}
            name="locations"
          >
            Locations
          </button>
          <LocationCard locations={locations} />
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
});

export const mapDispatchToProps = dispatch => ({
  fetchFilms: () => dispatch(fetchFilms()),
  fetchLocations: () => dispatch(fetchLocations()),
  fetchPeople: () => dispatch(fetchPeople())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
