import { fetchFilms } from "./fetchFilms";
import * as actions from "../actions";

describe("fetchFilms Thunk", () => {
  let mockDispatch;
  let mockFilm;
  let mockUrl

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl= 'http://localhost:3000/locations';

    mockFilm = [
      {
        title: "Howl's Moving Castle"
      }
    ];
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilm)
      })
    );
    const expected = actions.getFilms(mockFilm);
    const thunk = fetchFilms(mockFilm);
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

    const thunk = fetchFilms(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.hasErrored("Something went wrong")
    );
  });
});
