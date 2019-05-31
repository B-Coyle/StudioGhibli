import React, { Component } from "react";
import  './Nav.css';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="Header">
        <header>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span />
              <span />
              <span />
              <ul id="menu">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <hr />
                <Link to="/films">
                  <li>Films</li>
                </Link>
                <hr />
                <Link to="/characters">
                  <li>Characters</li>
                </Link>
                <hr />
                <Link to="/locations">
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
