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
    expect(register.getInfo(1)).toEqual(expectedResult);
  });

  test("Test 2: searchKey 2", () => {
    const register = new carRegister(defaultData);
    const expectedResult = {
      consumptionPer100km: 4,
      comments: "-",
      powerSource: "hybrid",
    };
    expect(register.getInfo(2)).toEqual(expectedResult);
  });

  test("Test 3: wrong searchKey", () => {
    const register = new carRegister(defaultData);
    expect(register.getInfo(10)).toBeNull();
  });

  test("Test 4: empty searchKey", () => {
    const register = new carRegister(defaultData);
    expect(register.getInfo("")).toBeNull();
  });

  test("Test 5: searchKey 5 (no info field)", () => {
    const register = new carRegister(defaultData);
    expect(register.getInfo(5)).toBeNull();
  });
});

// End of getInfo

// Start of getCarColors
describe("Test cases for getCarColors", () => {
  test("Test 1: searchKey 1", () => {
    const register = new carRegister(defaultData);
    const expectedResult = [
      "white", "yellow", "blue"
    ];
    expect(register.getCarColors(1)).toEqual(expectedResult);
  });

  test("Test 2: searchKey 5", () => {
    const register = new carRegister(defaultData);
    expect(register.getCarColors(5)).toEqual(["red", "black", "orange"]);
  });

  test("Test 3: wrong search key/non-existing car number (searchKey 6)", () => {
    const register = new carRegister(defaultData);
   expect(register.getCarColors(6)).toEqual([]); 
  });

  
  test("Test 4: searchKey is missing", () => {
    const register = new carRegister(defaultData);
    expect(register.getCarColors("")).toEqual([]);
  });
});
// End of getCarColors

// Start of getPrice(number)
describe("Test cases for getPrice(number)", () => {
  test("Test 1: number 1", () => {
    const register = new carRegister(defaultData);
    const expectedResult = 300;
    expect(register.getPrice(1)).toEqual(expectedResult);
  });

  test("Test 2: number 6 (Non-existing car)", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getPrice(6)).toThrow(
      "nothing found with given number"
    );
  });

  test("Test 3: missing parameter", () => {
    const register = new carRegister(defaultData);
    expect(() => register.getPrice()).toThrow("missing parameter");
  });
});
  // End of getPrice(number)

  //Start of getHasInfo
  describe("Test cases for getHasInfo", () => {
    test("Test 1: searchKey 1", () => {
      const register = new carRegister(defaultData);
      expect(register.getHasInfo(1)).toEqual(true);
    });

    test("Test 2: searchKey 5", () => {
      const register = new carRegister(defaultData);
       expect(register.getHasInfo(5)).toEqual(false);
    });

    test("Test 3: missing parameter", () => {
      const register = new carRegister(defaultData);
       expect(register.getHasInfo()).toEqual(false);
    });

    test("Test 4: searchKey should be a number", () => {
    const register = new carRegister(defaultData);
    expect(register.getHasInfo("abc")).toEqual(false);
    });
    //End of getHasInfo
  });