import React from 'react';
import { FilmCard } from '../../components/Card/FilmCard/index';
import {PeopleCard} from '../../components/Card/PeopleCard/index';
import {LocationCard} from '../../components/Card/LocationCard/index';

export const MainContainer = ({data, type}) => {
    console.log(data)
    const filmCard = data.map(i => {
      let result;
      console.log(i)
      if (type === 'films') {
        result = <FilmCard data={i} key={i.id} />
      } else if (type === 'people') {
        result = <PeopleCard data={i} key={i.id} />
      } else {
        result = <LocationCard data={i} key={i.id} />
      } 
      return result;
    })
    console.log(filmCard)

    return (
        <section className="card-section">
            {filmCard}
        </section>
    )
}




export default MainContainer;
