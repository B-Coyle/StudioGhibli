import  {LocationCard} from './index';
import { shallow } from "enzyme";
import React from 'react';

describe("LocationCard", () =>{
    let wrapper 

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });
})
