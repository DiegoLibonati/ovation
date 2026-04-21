import { handleIndex } from "@/helpers/handleIndex";

describe("handleIndex", () => {
  describe("when value is negative", () => {
    it("should return the last valid index", () => {
      expect(handleIndex(-1, 4)).toBe(3);
    });

    it("should return the last valid index for any negative value", () => {
      expect(handleIndex(-5, 4)).toBe(3);
    });
  });

  describe("when value exceeds the array bounds", () => {
    it("should return 0 when value equals arrLength", () => {
      expect(handleIndex(4, 4)).toBe(0);
    });

    it("should return 0 when value is greater than arrLength", () => {
      expect(handleIndex(10, 4)).toBe(0);
    });
  });

  describe("when value is within valid bounds", () => {
    it("should return the value as-is", () => {
      expect(handleIndex(2, 4)).toBe(2);
    });

    it("should return 0 when value is 0", () => {
      expect(handleIndex(0, 4)).toBe(0);
    });

    it("should return the last valid index when value is arrLength - 1", () => {
      expect(handleIndex(3, 4)).toBe(3);
    });
  });
});
