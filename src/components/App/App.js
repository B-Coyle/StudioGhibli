import React, { Component } from "react";
import Header from "../../containers/Header/index";
import { fetchMovie } from "../../util/apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
      randomFilm: {}
    };
  }

  componentDidMount() {
    fetchMovie().then(films =>
      this.setState(
        {
          films: films.results
        },
        () => this.assignRandomInformation()
      )
    );
  }

  assignRandomInformation = () => {
    let randomNumber = Math.floor(Math.random() * this.state.allFilms.length);
    this.setState({
      randomFilm: this.state.films[randomNumber]
    });
  };

  render() {
    return (
      <section className="App mainBody">
        <header className="headerContainer">
          <Header />
        </header>
        <main className="mainCardArea">
          <p>{this.state.randomFilm.title}</p>
          <p>{this.state.randomFilm.description}</p>
        </main>
      </section>
    );
  }
}

export default App;
