import React, { Component } from "react";
import './Nav.css';
import {NavLink} from 'react-router-dom';

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
                <NavLink to="/">
                  <li>Home</li>
                </NavLink>
                <hr />
                <NavLink to="/films">
                  <li>Films</li>
                </NavLink>
                <hr />
                <NavLink to="/characters">
                  <li>Characters</li>
                </NavLink>
                <hr />
                <NavLink to="/locations">
                  <li>Locations</li>
                </NavLink>
                <hr />
                <NavLink to="/about">
                  <li>About</li>
                </NavLink>
                <hr />
                <NavLink to="/recipes">
                  <li>Recipes</li>
                </NavLink>
                <hr />
              </ul>
            </div>
          </nav>
        </header>
      </section>
    );
  }
}
