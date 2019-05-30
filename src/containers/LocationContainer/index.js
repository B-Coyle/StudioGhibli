import React, { Component } from "react";
import {fetchLocations } from "../../util/apiCalls";

export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetchLocations()
    .then(location =>
      this.setState({
        locations: location
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