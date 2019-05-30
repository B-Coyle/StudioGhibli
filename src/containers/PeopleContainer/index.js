import React, { Component } from "react";
import { fetchPeople } from "../../util/apiCalls";

export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetchPeople()
    .then(people =>
      this.setState({
        characters: people
      })
    );
  }

  render() {
    return (
      <section>
      <p>Test</p>
      </section>
    );
  }
}
