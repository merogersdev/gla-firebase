import { describe, test, expect } from "vitest";

import { capitalizeFirst } from "./string";

describe("Unit test for Capitalize", () => {
  test("Capitalize normal word", () => {
    expect(capitalizeFirst("chicken")).toBe("Chicken");
  });
  test("Capitalize short word", () => {
    expect(capitalizeFirst("oats")).toBe("Oats");
  });
  test("Capitalize first letter multiple words", () => {
    expect(capitalizeFirst("instant oats")).toBe("Instant oats");
  });
});
