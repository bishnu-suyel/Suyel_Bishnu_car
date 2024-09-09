"use strict";

module.exports = class carRegister {
  #register;
  constructor(data) {
    if (!data) {
      throw new Error("data storage missing");
    }
    this.#register = data;
  }

  // Start of getTotalPriceOfCarsByModel
  getTotalPriceOfCarsByModel(searchValue){
    if (!searchValue) {
      throw new Error("missing parameter");
    }
    // Filter cars by the given model
    const filteredCars = this.#register.filter(
      (car) => car.model === searchValue
    );

    // If no cars match the searchValue, throw an error
    if (filteredCars.length === 0) {
      throw new Error("nothing found with given searchValue");
    }

    // Calculate the total price of the filtered cars
    const totalPrice = filteredCars.reduce((sum, car) => sum + car.price, 0);
    return totalPrice;
  }
  // End of getTotalPriceOfCarsByModel

  // Start of getInfo
};