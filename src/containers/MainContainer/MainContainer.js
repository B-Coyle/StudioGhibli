import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { FilmCard } from "../../components/Card/FilmCard/index";
import { LocationCard } from "../../components/Card/LocationCard/index";
import { PeopleCard } from "../../components/Card/PeopleCard/index";
import { setCategory } from "../../actions/index";
import { connect } from "react-redux";

export class MainContainer extends Component {
  constructor() {
    super();
  }

  setContainer = () => {
    switch (this.props.category) {
      case "films":
        return <FilmCard />;
      case "characters":
        return <PeopleCard />;
      case "locations":
        return <LocationCard />;
      default:
        return <h2>Error Loading Information</h2>;
    }
  };

  render() {
    return (
      <section className="mainBtns">
        <Route exact path="/films">
          <button
            className="button"
            onClick={this.props.setCategory}
            name="films"
            value="films"
          >
            Films
          </button>
          <FilmCard films={this.props.film} />
        </Route>
        <Route exact path="/characters">
          <button
            className="button"
            onClick={this.props.setCategory}
            name="characters"
            value="characters"
          >
            Characters
          </button>
          <PeopleCard people={this.props.people} />
        </Route>
        <Route exact path="/locations">
          <button
            className="button"
            onClick={this.props.setCategory}
            name="locations"
            value="locations"
          >
            Locations
          </button>
          <LocationCard location={this.props.location} />
        </Route>
      </section>
    );
  }
}

// export const mapStateToProps = state => ({
//   films: state.films,
//   locations: state.locations,
//   people: state.people,
//   category: state.category
// });

export const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category))
});

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
