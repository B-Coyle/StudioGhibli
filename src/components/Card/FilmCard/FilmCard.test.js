import  {FilmCard} from './index';
import { shallow } from "enzyme";
import React from 'react';

describe("FilmCard", () =>{
    let wrapper 

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });
})
