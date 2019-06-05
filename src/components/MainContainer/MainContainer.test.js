import  {MainContainer} from './MainContainer';
import { shallow } from "enzyme";
import React from 'react';

describe("MainContainer", () =>{
    let wrapper 

    it("should match the snapshot", () => {
        expect(wrapper).toMatchSnapshot();
      });
})
