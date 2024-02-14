import { describe, test, expect } from "vitest";

import { testEmail, testName, testPassword } from "./regex";

describe("Check regex functions", () => {
  describe("Test email validation", () => {
    test("Test valid email", () => {
      expect(testEmail("test@test.com")).toBe(true);
    });
    test("Test no extension", () => {
      expect(testEmail("test@test")).toBe(false);
    });
    test("Test no @ sign", () => {
      expect(testEmail("testtest.com")).toBe(false);
    });
  });
  describe("Test name validation", () => {
    test("Test valid name", () => {
      expect(testName("Kirk")).toBe(true);
    });
    test("Test empty string", () => {
      expect(testName("")).toBe(false);
    });
    test("Test too long", () => {
      expect(testName("This Name Is Way Too Long for This To Work")).toBe(
        false,
      );
    });
    test("Test invalid chars", () => {
      expect(testName("$)~*&)&^^&)&^*#!")).toBe(false);
    });
  });
  describe("Test password validation", () => {
    test("Password normal", () => {
      expect(testPassword("ThisIsANormalP@ssword")).toBe(true);
    });
    test("Password blank", () => {
      expect(testPassword("")).toBe(false);
    });
    test("Password too short", () => {
      expect(testPassword("te")).toBe(false);
    });
    test("Password too long", () => {
      expect(testPassword("ThisPasswordIsWayyyyyyTooLong")).toBe(false);
    });
  });
});
