import React, { Component } from "react";
import "./App.css";
// import PropTypes from "prop-types";
import { fetchMovie } from "../../util/apiCalls.js";
import MainContainer from "../../containers/MainContainer/MainContainer";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";

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
        <h1 className="main-title">Studio Ghibli</h1>
        <p>
          “We each need to find our own inspiration. Sometimes it’s not
          easy.”—Kiki’s Delivery Service (1989)
        </p>
        <main>
          <div className="Nav">
            <Nav />
          </div>
          <div className="Button">
            <Button />
          </div>
          <div className="MainContainer">
            <MainContainer />
          </div>
        </main>
      </section>
    );
  }
}
