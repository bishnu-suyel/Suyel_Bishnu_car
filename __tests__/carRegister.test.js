"use strict";

const carRegister = require("../carRegister");
const defaultData = require("../cars.json");

describe("Testing constructor", () => {
  test("Test 1: missing parameter throw an exception", () => {
    expect(() => new carRegister()).toThrow('data storage missing');
  });
}); 
// End of testing constructor.

//Start of testing getTotalPriceOfCarsByModel
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
}); 
// End of testing getTotalPriceOfCarsByModel

//Start of getInfo
describe("Test cases for getInfo", () => {
  test("Test 1: searchKey 1", () => {
    const register = new carRegister(defaultData);
    const expectedResult = {
      consumptionPer100km: 1,
      comments: "low emission",
      powerSource: "pushing",
    };
    expect(register.getInfo("1")).toEqual(expectedResult);
  });

  test("Test 2: searchKey 2", () => {
    const register = new carRegister(defaultData);
    const expectedResult = {
      consumptionPer100km: 4,
      comments: "-",
      powerSource: "hybrid",
    };
    expect(register.getInfo("2")).toEqual(expectedResult);
  });

  test("Test 3: wrong searchKey", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getInfo("10")).toThrow(
      "nothing found with given searchKey");
  });

  test("Test 4: empty searchKey", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getInfo("")).toThrow("missing parameter");
  });

  test("Test 5: searchKey 5 (no info field)", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getInfo("5")).toThrow(
      "No information available for this car");
  });
});

// End of getInfo