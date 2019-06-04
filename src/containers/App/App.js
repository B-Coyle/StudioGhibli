import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import { fetchFilms } from "../../thunks/fetchFilms";
import { fetchLocations } from "../../thunks/fetchLocations";
import { fetchPeople } from "../../thunks/fetchPeople";
import Nav from "../../components/Nav/Nav";
import MainContainer from "../MainContainer/MainContainer";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchFilms();
    this.props.fetchLocations();
    this.props.fetchPeople();
  }

  render() {
    const { hasErrored, isLoading } = this.props;

    return (
      <section className="App mainBody">
        <div className="header">
          <Nav />
          <h1 className="main-title">Studio Ghibli</h1>
          <p className="quote">
            “We each need to find our own inspiration. Sometimes it’s not easy.”
          </p>
          <p className="quote">—Kiki’s Delivery Service (1989)</p>
        </div>
        <main className="main">
          <Link to="/films">
            <button
              className="button"
              name="films"
              value="films"
            >
              Films
            </button>
          </Link>
          <Link to="/characters">
            <button
              className="button"
              name="characters"
              value="characters"
            >
              Characters
            </button>
          </Link>
          <Link to="/locations">
            <button
              className="button"
              name="locations"
              value="locations"
            >
              Locations
            </button>
          </Link>
          {hasErrored && <h2>Error loading information</h2>}
          {isLoading && <h2>Please wait- information loading ...</h2>}
          <Route
            exact
            path="/films"
            render={(props) => <MainContainer data={this.props.films}  type='films'/>}
          />
          <Route
            exact
            path="/characters"
            render={(props) => <MainContainer data={this.props.people} type='people' />}
          />
          <Route
            exact
            path="/locations"
            render={(props) => <MainContainer data={this.props.locations} type='locations' />}
          />
        </main> 
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
)(App);
