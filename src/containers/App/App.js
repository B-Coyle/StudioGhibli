import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import { fetchMovie } from "../../util/apiCalls.js";
import { fetchFilms } from "../../thunks/fetchFilms";
import { fetchLocations } from "../../thunks/fetchLocations";
import { fetchPeople } from "../../thunks/fetchPeople";
import Nav from "../../components/Nav/Nav";
import MainContainer from "../MainContainer/MainContainer";
import { Router, Route } from "react-router-dom";
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
          {hasErrored && <h2>Error loading information</h2>}
          {isLoading && <h2>Please wait- information loading ...</h2>}
          <MainContainer />
        </main>
        {/* <iframe width="420" height="315" src="https://www.youtube.com/watch?v=3jWRrafhO7M&t=2575s?autoplay=1"></iframe> */}
        </section>
    );
  }
}

export const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
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
