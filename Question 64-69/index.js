// Question no 64 : "Combine Strings and numbers"
function concatinating(Strings, number) {
    console.log(Strings + " " + number);
}
concatinating("Roll Number : ", 118719);
// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function Remainder(num1, num2) {
    return num1 % num2;
}
console.log(Remainder(5, 3));
// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function returnsBoolean(value1, value2) {
    return value1 && value2;
}
console.log(returnsBoolean(true, true));
// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function returnsNumber(value1, value2) {
    console.log(Number(value1) + value2);
}
returnsNumber("10", 87);
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function rounding(num1, num2) {
    return Math.round(num1 * num2 * 100) / 100; // returns answer with two decimal places
}
console.log(rounding(3.714, 6.28));
function quotientandRemainder(num1, num2) {
    return {
        quotient: Math.floor(num1 / num2),
        remainder: num1 % num2
    };
}
console.log(quotientandRemainder(5, 2));
console.log(quotientandRemainder(10, 3));
