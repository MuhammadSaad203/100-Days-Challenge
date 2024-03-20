var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var Laptop = {
    make: "HP",
    model: "Pavilion x360",
    year: 2014,
    describe: function () {
        console.log("The Laptop of ".concat(Laptop.make, " of ").concat(Laptop.model, " is manufatured in ").concat(Laptop.year));
    }
};
Laptop.describe();
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "HP", model: "Pavilion x360", year: 2014 },
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Lenovo", model: "Yoga C930", year: 2018 }
];
var firstLaptop = laptops[0], secondLaptop = laptops[1];
console.log(firstLaptop);
console.log(secondLaptop);
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var price1 = [100000, 150000, 50000];
var price2 = [80000, 160000, 52000];
var combinedPrice = __spreadArray(__spreadArray([], price1, true), price2, true);
var ascending_combinedPrice = combinedPrice.sort(function (a, b) { return a - b; });
console.log(ascending_combinedPrice);
