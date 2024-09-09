"use strict";

const carRegister = require("../carRegister");
const defaultData = require("../cars.json");

describe("Testing constructor", () => {
  test("Test 1: missing parameter throw an exception", () => {
    expect(() => new carRegister()).toThrow('data storage missing');
  });
});