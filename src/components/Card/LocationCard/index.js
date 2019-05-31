import React, { Component } from "react";
import {fetchLocations } from "../../../util/apiCalls";

export default class LocationCard extends Component {
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
      <p>Test2</p>
      </section>
    );
  }
}