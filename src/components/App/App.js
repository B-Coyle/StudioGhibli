import React, { Component } from "react";
import "./App.scss";
// import PropTypes from "prop-types";
import Header from "../../containers/Header/index";
import { fetchMovie } from "../../util/apiCalls.js";
// import MainContainer from "../MainContainer/MainContainer.js";

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
        <div>
          <Header />
        </div>
        <main className="mainCardArea">
          <p>{this.state.randomFilm.title}</p>
          <p>{this.state.randomFilm.description}</p>
        </main>
      </section>
    );
  }
}
