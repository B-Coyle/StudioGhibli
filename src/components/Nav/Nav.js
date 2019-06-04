import React, { Component } from "react";
import './Nav.css';
import {NavLink} from 'react-router-dom';
import { FilmCard } from "../Card/FilmCard";
import { PeopleCard } from "../Card/PeopleCard";
import { LocationCard } from "../Card/LocationCard";
import { setCategory } from "../../actions/index";
import { connect } from "react-redux";

export class Nav extends Component {
  constructor() {
    super();
    this.state ={
      showCards: false
    }
  }

  showCards = event => {
    let { showCards } = this.state;
    if (!event || showCards) {
      this.setState({
        showCards: !showCards
      });
    }
  };

  selectCategory = event => {
    const category = event.target.innerHTML;

    this.showCards();

    this.props.setCategory(category);
  };


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
                  <li onClick={this.selectCategory}>Home</li>
                </NavLink>
                <hr />
                <NavLink to="/films">
                  <li onClick={this.selectCategory}>Films</li>
                </NavLink>
                <hr />
                <NavLink to="/characters">
                  <li onClick={this.selectCategory}>Characters</li>
                </NavLink>
                <hr />
                <NavLink to="/locations">
                  <li onClick={this.selectCategory}>Locations</li>
                </NavLink>
                <hr />
                <NavLink to="/about">
                  <li onClick={this.selectCategory}>About</li>
                </NavLink>
                <hr />
                <NavLink to="/recipes">
                  <li onClick={this.selectCategory}>Recipes</li>
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

export const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category))
});

export default connect(null, mapDispatchToProps)(Nav)