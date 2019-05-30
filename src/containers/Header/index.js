import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <section>
        <header>
          <section className="header-title">
            <h1 className="h1">Studio Ghibli</h1>
          </section>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span />
              <span />
              <span />
              <ul id="menu">
                <Link to="/MovieContainer">
                  <li>Home</li>
                </Link>
                <hr />
                <Link to="CardContainer/films">
                  <li>Films</li>
                </Link>
                <hr />
                <Link to="CardContainer/characters">
                  <li>Characters</li>
                </Link>
                <hr />
                <Link to="CardContainer/locations">
                  <li>Locations</li>
                </Link>
                <hr />
                <Link to="/about">
                  <li>About</li>
                </Link>
                <hr />
                <Link to="/recipes">
                  <li>Recipes</li>
                </Link>
                <hr />
              </ul>
            </div>
          </nav>
        </header>
      </section>
    );
  }
}
