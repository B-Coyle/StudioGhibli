import React, { Component } from "react";
import { fetchPeople } from "../../util/apiCalls";
import Card from '../../components/Card/index';

export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      loading: false
    };
  }

  componentDidMount() {
    fetchPeople()
    .then(people =>
      this.setState({
        people,
        loading: true
      })
    );
    this.formatPerson();
  }

  formatPerson=()=> {
    let updatedPeople = this.state.characters.map(person => {
      let { name, age, gender,  } = person;
      return { name, age, gender };
    });

    this.setState({ 
      people: updatedPeople, 
      loading: false 
    });
    
  }; 

  render() {
    const peopleCards = this.state.characters.map(person => 
      <Card 
        key={person.id}
        data={person}
        category="person"
      />
    )

    const loadingMessage = (
      <div className="loadingMessage">
        <p>Information loading. Please Hold...</p>
      </div>
    );
    return (
      <section className="cardContainer">
        {this.state.loading ? loadingMessage : peopleCards}
      </section>
    );
  }
}
