import React, { Component } from "react";
import { fetchPeople } from "../../../util/apiCalls";
class PeopleCard extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      loading: false
    };
  }

  componentDidMount() {
    fetchPeople().then(people =>
      this.setState({
        people,
        loading: true
      })
    );
    this.formatPerson();
  }

  formatPerson = () => {
    let updatedPeople = this.state.characters.map(person => {
      let { name, age, gender } = person;
      return { name, age, gender };
    });

    this.setState({
      people: updatedPeople,
      loading: false
    });
  };

  render() {
    // const peopleCards = this.state.characters.map(person => (
    //   <PeopleCard key={person.id} data={person} category="person" />
    // ));

    const loadingMessage = (
      <div className="loadingMessage">
        <p>Information loading. Please Hold...</p>
      </div>
    );
    return (
      <section className="cardContainer">
        <p>{this.state.people[0]}</p>
        {/* {this.state.loading ? loadingMessage : peopleCards} */}
      </section>
    );
  }
}

export default PeopleCard;