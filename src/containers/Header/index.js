import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <section className="Header">
        <header>
          <section className="header-title">
            <h1 className="main-title">Studio Ghibli</h1>
            <hr />
            <p className="quote">“We each need to find our own inspiration. Sometimes it’s not
              easy.” —Kiki’s Delivery Service (1989)</p>
          </section>
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

export default Header;
