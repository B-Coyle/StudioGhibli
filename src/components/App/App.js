import React, { Component } from "react";
import "./App.scss";
import PropTypes from "prop-types";
import Header from "../../containers/Header/index";
import { fetchMovie } from "../../util/apiCalls.js";
import { Route, Switch, Redirect, Link } from "react-router-dom";
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
        {/* <div className="App mainBody">
          {/* <Switch>
            {/* <Route exact path="/" component={} /> */}
            {/* <Route path="/Header" component={Header} />
            <Redirect to="/" /> */}
          {/* </Switch> */}
        {/* </div> */} 
        <div>
          <Header />
        </div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
              <h4 className="user-name" />
              <Link to="/MovieContainer">
                <li>Home</li>
              </Link>
              <hr />
              <Link to="MovieContainer/favorites">
                <li>Favorites</li>
              </Link>
              <hr />
              <Link to="">
                <li>About</li>
              </Link>
              <hr />
              <Link to="/Login">
                <li>Sign Out</li>
              </Link>
              <hr />
            </ul>
          </div>
        </nav>
        <main className="mainCardArea">
          <p>{this.state.randomFilm.title}</p>
          <p>{this.state.randomFilm.description}</p>
        </main>
      </section>
    );
  }
}
