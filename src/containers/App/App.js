import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import { fetchMovie } from "../../util/apiCalls.js";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Nav from '../../components/Nav/Nav';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allFilms: [],
      randomFilm: {}
    };
  }

  componentDidMount() {
    fetchMovie().then(films =>
      this.setState(
        {
          allFilms: films
        },
        () => this.assignRandomInformation()
      )
    );
  }

  assignRandomInformation = () => {
    let randomNumber = Math.floor(Math.random() * this.state.allFilms.length);
    this.setState({
      randomFilm: this.state.allFilms[randomNumber]
    });
  };

  render() {
    return (
      <section className="App mainBody">
        <div className="header">
          <h1 className="main-title">Studio Ghibli</h1>
          <p className="quote">
            “We each need to find our own inspiration. Sometimes it’s not easy.”
          </p>
          <p className="quote">—Kiki’s Delivery Service (1989)</p>
        </div>
        <main className="main">
          <div className="Nav">
            <Nav />
          </div>
          <div className="MainContainer">
            <MainContainer />
          </div>
        </main>
      </section>
    );
  }
}


