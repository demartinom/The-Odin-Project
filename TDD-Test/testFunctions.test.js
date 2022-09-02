import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
} from "./testFunctions.js";

test("first letter is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("string is reversed", () => {
  expect(reverseString("how are you doing")).toBe("doing you are how");
});

test("calculator does addition", () => {
  expect(calculator("addition", 1, 2)).toBe(3);
});

test("calculator does subtraction", () => {
  expect(calculator("subtraction", 10, 5)).toBe(5);
});

test("calculator does multiplication", () => {
  expect(calculator("multiply", 2, 5)).toBe(10);
});

test("calculator does division", () => {
  expect(calculator("divide", 10, 2)).toBe(5);
});
test("returns an object with information", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
