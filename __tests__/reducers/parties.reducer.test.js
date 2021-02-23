import partiesReducer from "../../src/reducers/parties.reducer";

describe("default", () => {
  it("returns default state", () => {
    expect(partiesReducer(undefined, {})).toEqual({});
  });
});
