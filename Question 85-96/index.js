// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function position(str) {
    return str.indexOf("code");
}
console.log(position(" I am  learning how to code in Java Script "));
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
function checking(str) {
    return str.includes("JavaScript");
}
console.log(checking("I am  learning how to code in JavaScript"));
// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function extracting(str) {
    return str.substring(0, 14);
}
console.log(extracting("I am  learning how to code in JavaScript"));
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function rounding(num) {
    return Math.round(num);
}
console.log(rounding(1234.6784));
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function converting(str) {
    return parseFloat(str);
}
console.log(converting("203"));
console.log(converting(203));
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isNumber(val) {
    return isNaN(val);
}
console.log(isNumber(203));
console.log(isNumber("Bey"));
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
var favFruits = ["Apple", "Banana", "Mango"];
console.log("Before pushing ".concat(favFruits));
favFruits.push("Orange");
console.log("After pushing ".concat(favFruits));
// Question 92:  Write a function to remove the last element from an array and return the removed element.
function removing(arr) {
    if (arr.length > 0) {
        var removedElement = arr.pop();
        return removedElement;
    }
    else {
        return undefined;
    }
}
console.log(removing([1, 2, 3, 4]));
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
var change = favFruits.indexOf("Banana");
favFruits[change] = "Mango";
console.log(favFruits);
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
var names = ["Rumman", "Sarfaraz", "Haasan", "Noman"];
var lens = names.map(function (name) { return name.length; });
console.log("The lenght of these names are :", lens);
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filtering(num) {
    return num.filter(function (n) { return n > 10; });
}
console.log(filtering([1, 5, 8, 11, 3, 12, 15, 89, 0]));
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sum(arr) {
    return arr.reduce(function (arr1, arr2) { return arr1 + arr2; });
}
console.log(sum([1, 5, 8, 11, 3, 12]));
