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
  getTotalPriceOfCarsByModel(searchValue) {
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
  getInfo(searchKey) {
    // Ensure searchKey is not empty
    if (!searchKey) {
      return null;
    }

    // Find the matching entry based on the 'number' property
    const result = this.#register.find(
      (car) => car.number === parseInt(searchKey, 10)
    );

    // If no result is found, return null
    if (!result) {
      return null;
    }

    // Check if the 'info' field exists for the found car
    if (!result.info) {
      return null;
    }

    // Return only the 'info' field
    return result.info;
  }

  // End of getInfo

  // Start of getCarColors
  getCarColors(searchKey) {
    // If searchKey is undefined or null, return an empty array
    if (searchKey === undefined || searchKey === null) {
      return [];
    }

    // Find the car with the given searchKey (car number)
    const car = this.#register.find((car) => car.number === searchKey);

    // If no car is found, return an empty array
    if (!car) {
      return [];
    }

    // Return the colors of the found car, or an empty array if none exist
    return car.colors || [];
  }

  // End of getCarColors

  // Start of getPrice(number)
  getPrice(number) {
    // If number is undefined or null, throw error missing parameter
    if (number === undefined || number === null) {
      throw new Error("missing parameter");
    }

    // Find the car with the given number (car number)
    const car = this.#register.find((car) => car.number === number);

    // If no car is found, throw error
    if (!car) {
      throw new Error("nothing found with given number");
    }

    // Return the price of the found car, or an empty array if none exist
    return car.price || [];
  }
  // End of getPrice(number)

  //Start of getHasInfo
 getHasInfo(searchKey) {
    // If searchKey is undefined, null, or not a number, return false
    if (searchKey === undefined || searchKey === null || isNaN(searchKey)) {
      return false;
    }

    // Find the car with the given searchKey (car number)
    const car = this.#register.find((car) => car.number === parseInt(searchKey, 10));

    // If no car is found, or if the car doesn't have an 'info' field, return false
    if (!car || !car.info) {
      return false;
    }

    // Return true if the car has an 'info' field
    return true;
  };

  //End of getHasInfo
};
// End of class


