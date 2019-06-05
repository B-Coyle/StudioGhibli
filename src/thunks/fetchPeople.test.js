import { fetchPeople } from "./fetchPeople";
import * as actions from "../actions";

describe("fetchPeople Thunk", () => {
  let mockDispatch;
  let mockPerson;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "http://localhost:3000/characters";
    mockPerson = [
      {
        name: "Kiki"
      }
    ];
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPerson)
      })
    );
    const expected = actions.getPeople(mockPerson);
    const thunk = fetchPeople(mockPerson);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });

  it("should dispatch hasErrored with a message if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        statusText: "Something went wrong"
      })
    );

    const thunk = fetchPeople(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.hasErrored("Something went wrong")
    );
  });
});

//still need to do catch testing
