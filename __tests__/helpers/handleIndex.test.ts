import { handleIndex } from "@/helpers/handleIndex";

describe("handleIndex", () => {
  it("should return the value when it is within valid bounds", () => {
    expect(handleIndex(1, 4)).toBe(1);
  });

  it("should return 0 when value equals 0", () => {
    expect(handleIndex(0, 4)).toBe(0);
  });

  it("should return the last index when value equals arrLength - 1", () => {
    expect(handleIndex(3, 4)).toBe(3);
  });

  it("should return arrLength - 1 when value is negative", () => {
    expect(handleIndex(-1, 4)).toBe(3);
  });

  it("should return 0 when value equals arrLength (one past the end)", () => {
    expect(handleIndex(4, 4)).toBe(0);
  });

  it("should return 0 when value is greater than arrLength", () => {
    expect(handleIndex(10, 4)).toBe(0);
  });

  it("should handle an array of length 1 returning 0 for any out-of-bounds value", () => {
    expect(handleIndex(-1, 1)).toBe(0);
    expect(handleIndex(1, 1)).toBe(0);
  });
});
