import React from "react";
import './Nav.css';
import {NavLink } from 'react-router-dom';

export const Nav = props => {

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
                  <li value="home">Home</li>
                </NavLink>
                <hr />
                <NavLink to="/films" >
                  <li value="films">Films</li>
                </NavLink>
                <hr />
                <NavLink to="/characters" >
                  <li value="characters">Characters</li>
                </NavLink>
                <hr />
                <NavLink to="/locations" >
                  <li value="locations">Locations</li>
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

export default Nav;