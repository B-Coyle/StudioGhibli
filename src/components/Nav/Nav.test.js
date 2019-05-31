import  {Nav} from './Nav';
import { shallow } from "enzyme";
import React from 'react';

describe("Nav", () =>{
    let wrapper 

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });
})
