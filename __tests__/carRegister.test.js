"use strict";

const carRegister = require("../carRegister");
const defaultData = require("../cars.json");

describe("Testing constructor", () => {
  test("Test 1: missing parameter throw an exception", () => {
    expect(() => new carRegister()).toThrow('data storage missing');
  });
}); // End of testing constructor.

describe("Test cases for getTotalPriceOfCarsByModel", () => {
  test("Test 1: VIP", () => {
    const register = new carRegister(defaultData);
    expect(register.getTotalPriceOfCarsByModel("VIP")).toBe(300);
  });

  test("Test 2: silver", () => {
    const register = new carRegister(defaultData);
    expect(register.getTotalPriceOfCarsByModel("silver")).toBe(159); //36+123
  });

  test("Test 3: nothing found with given searchValue", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getTotalPriceOfCarsByModel("x")).toThrow(
      "nothing found with given searchValue"
    );
  });

  test("Test 4: parameter missing", ()=>{
    const register = new carRegister(defaultData);
    expect(() => register.getTotalPriceOfCarsByModel("")).toThrow('missing parameter');
  });
}); // End of testing getTotalPriceOfCarsByModel