import { fetchFilms } from "./fetchFilms";
import * as actions from "../actions";

describe("addNewNote Thunk", () => {
  let mockDispatch;
  let mockFilm;

  beforeEach(() => {
    mockDispatch = jest.fn();

    mockFilm = [{
        title: "Howl's Moving Castle"
    }]
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFilm)
      })
    );
    const expected = actions.getFilms(mockFilm)
    const thunk = fetchFilms(mockFilm);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

//still need to do catch testing