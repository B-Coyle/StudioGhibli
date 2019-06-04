import React, { Component } from "react";
import './Nav.css';
import {NavLink } from 'react-router-dom';
import { FilmCard } from "../Card/FilmCard";
import { PeopleCard } from "../Card/PeopleCard";
import { LocationCard } from "../Card/LocationCard";
import { setCategory } from "../../actions/index";
import { connect } from "react-redux";

export class Nav extends Component {
  constructor() {
    super();
    this.state ={
      showCards: false,
      category: null
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

  setCard = () => {
    let container;
    switch (this.props.category) {
      case "Films":
        container = this.props.films.map(films => (
          <FilmCard films={films} key={films.id} />
        ));
        break;
      case "Characters":
        container = this.props.people.map(people => (
          <PeopleCard people={people} key={people.id} />
        ));
        break;
      case "Locations":
        container = this.props.locations.map(location => (
          <LocationCard location={location} key={location.id} />
        ));
        break;
      default:
        container = <h2>Error Loading Information</h2>;
    }
    return container;
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
                  <li onClick={this.selectCategory} render={()=> this.setCard()}>Home</li>
                </NavLink>
                <hr />
                <NavLink to="/films">
                  <li onClick={this.selectCategory} render={() => this.setCard()}>Films</li>
                </NavLink>
                <hr />
                <NavLink to="/characters">
                  <li onClick={this.selectCategory} render={() => this.setCard()}>Characters</li>
                </NavLink>
                <hr />
                <NavLink to="/locations">
                  <li onClick={this.selectCategory} render= {() => this.setCard()}>Locations</li>
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

export const mapStateToProps = state => ({
  films: state.films,
  locations: state.locations,
  people: state.people,
  category: state.category
});

export const mapDispatchToProps = dispatch => ({
  setCategory: category => dispatch(setCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav)