import { App } from "./App";
import { shallow } from "enzyme";
import React from "react";
import * as actions from "../../actions/index";
import { fetchFilms } from "../../thunks/fetchFilms";
import { mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  let wrapper;
  let mockProps = {
    isLoading: false,
    hasErrored: "",
    films: [{ films: "Howl's Moving Castle" }],
    locations: [{ locations: "Irontown" }],
    people: [{ people: "Kiki" }]
  };

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should return a props object with isLoading, hasErrored, and an array of presidents", () => {
      const mockState = {
        films: [{ films: "Howl's Moving Castle" }],
        hasErrored: "",
        isLoading: false,
        locations: [{ locations: "Irontown" }],
        people: [{ people: "Kiki" }]
      };
      const expected = mockProps;
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should dispatch the fetchFilms thunk", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchFilms();
      expect(mockDispatch).toHaveBeenCalled();
    });

    it("should dispatch the fetchLocations thunk", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchLocations();
      expect(mockDispatch).toHaveBeenCalled();
    });
    it("should dispatch the fetchPeople thunk", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.fetchPeople();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
