import { fetchLocations } from "./fetchLocations";
import * as actions from "../actions";

describe("fetchLocations Thunk", () => {
  let mockDispatch;
  let mockLocation;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockUrl = "http://localhost:3000/locations";
    mockLocation = [
      {
        name: "Irontown"
      }
    ];
  });

  it("should check if dispatch is called", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLocation)
      })
    );
    const expected = actions.getLocations(mockLocation);
    const thunk = fetchLocations(mockLocation);
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

    const thunk = fetchLocations(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      actions.hasErrored("Something went wrong")
    );
  });
});
