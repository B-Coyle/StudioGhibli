import { fetchLocations } from "./fetchLocations";
import * as actions from "../actions";

describe("addNewNote Thunk", () => {
  let mockDispatch;
  let mockLocation;

  beforeEach(() => {
    mockDispatch = jest.fn();

    mockLocation = [{
        name: "Irontown"
    }]
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLocation)
      })
    );
    const expected = actions.getLocations(mockLocation)
    const thunk = fetchLocations(mockLocation);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(expected);
  });
});

//still need to do catch testing