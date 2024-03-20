// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
let Laptop = {
  make: "HP",
  model: "Pavilion x360",
  year: 2014,
  describe: function () {
    console.log(
      `The Laptop of ${Laptop.make} of ${Laptop.model} is manufatured in ${Laptop.year}`
    );
  },
};
Laptop.describe();

// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops = [
  { make: "HP", model: "Pavilion x360", year: 2014 },
  { make: "Dell", model: "XPS 15", year: 2021 },
  { make: "Lenovo", model: "Yoga C930", year: 2018 },
];
const [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop);
console.log(secondLaptop);

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let price1 = [100000, 150000, 50000];
let price2 = [80000, 160000, 52000];
let combinedPrice = [...price1, ...price2];
let ascending_combinedPrice = combinedPrice.sort((a, b) => a - b);
console.log(ascending_combinedPrice);
