import React, { Component } from "react";
import "./App.scss";
// import PropTypes from "prop-types";
import Header from "../../containers/Header/index";
import { fetchMovie } from "../../util/apiCalls.js";
import PeopleContainer from "../../containers/PeopleContainer/index";
import LocationContainer from '../../containers/LocationContainer/index';
import Button from '../Button/Button';

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
        <main>
          <Header />
          <Button />
          <PeopleContainer />
          <LocationContainer />
      </main>
      </section>
    );
  }
}
