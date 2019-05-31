import  {PeopleCard} from './index';
import { shallow } from "enzyme";
import React from 'react';

describe("PeopleCard", () =>{
    let wrapper 

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });
})
