  import React, { Component } from "react";
import "./MainContainer.css";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { FilmCard } from "../../components/Card/FilmCard/index";
import { LocationCard } from "../../components/Card/LocationCard/index";
import { PeopleCard } from "../../components/Card/PeopleCard/index";
import { setCategory } from "../../actions/index";
import { connect } from "react-redux";

export class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      showCards: false,
      category: null
    };
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

    this.setState({
      category
    });
  };

  setCard = () => {
    let container;
    switch (this.state.category) {
      case "Films":
        container = this.props.films.map(films => <FilmCard film={films} key={films.id} />);
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

  //do conditional rendering to make sure item is fetched before rendering

  render() {
    let { showCards } = this.state;
    let cardContainer = this.setCard();
    return (
      <section className="mainBtns">
        <main className="main">{showCards && cardContainer}</main>
        <Route exact path="/films">
          <button
            className="button"
            onClick={this.selectCategory}
            name="films"
            value="films"
          >
            Films
          </button>
          {/* <FilmCard films={this.props.films} /> */}
        </Route>
        <Route exact path="/characters">
          <button
            className="button"
            onClick={this.selectCategory}
            name="characters"
            value="characters"
          >
            Characters
          </button>
          {/* <PeopleCard people={this.props.people} /> */}
        </Route>
        <Route exact path="/locations">
          <button
            className="button"
            onClick={this.selectCategory}
            name="locations"
            value="locations"
          >
            Locations
          </button>
          {/* <LocationCard location={this.props.location} /> */}
        </Route>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
