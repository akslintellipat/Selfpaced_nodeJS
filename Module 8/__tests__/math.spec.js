const { sumAll } = require("../math");

describe("testing sumAll", () => {
  it("multiple element array", () => {
    expect(sumAll([1, 2, 3, 4, 5])).toEqual(15);
  });
  it("single element array", () => {
    expect(sumAll([4])).toEqual(4);
  });
  it("empty array", () => {
    expect(sumAll([])).toEqual(0);
  });
  it("array with negative numbers", () => {
    expect(sumAll([-1, 3, -10, 4])).toEqual(-4);
  });
  it("array with floats", () => {
    let diff = Math.abs(sumAll([1.8, 3, 10, 4.6]) - 19.4);
    expect(diff).toBeLessThanOrEqual(Number.EPSILON);
  });
});
