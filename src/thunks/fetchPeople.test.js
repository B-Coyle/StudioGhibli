import { fetchPeople } from "./fetchPeople";
import * as actions from "../actions";

describe("fetchPeople Thunk", () => {
  let mockDispatch;
  let mockPerson;

  beforeEach(() => {
    mockDispatch = jest.fn();

    mockPerson = [{
        name: "Kiki"
    }]
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPerson)
      })
    );
    const expected = actions.getPeople(mockPerson)
    const thunk = fetchPeople(mockPerson);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

//still need to do catch testing