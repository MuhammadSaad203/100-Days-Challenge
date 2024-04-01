// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function printNumbers(): void {
  for (let num = 1; num <= 5; num++) {
    console.log(num);
  }
}

printNumbers();

//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

// let names : string = "Usman"; // Declaring the Name
// console.log(names)// printing the above name
// names = "Noman"; // Reinitializing the variable
// console.log(names)// printing the above

// const age = 20;
// console.log(age)

// try {
//     age = 45;
// }catch (error){
//     console.log("Error: Can't reassign a `const`-declared variable."); // Output: TypeError: Assignment to constant variable.
// }

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it
{
  let letValue = " Arham ";
  const constValue = 7;
  console.log(letValue);
  console.log(constValue);
}
// console.log(letValue); // Throws Error
// console.log(constValue); // THROWS Error

// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updating(): void {
  let value = 7;
  console.log("Initial Life", value);
  value = 17;
  console.log("Updated Value", value);
}
updating();

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapping(): void {
  let a = 5;
  let b = 10;
  console.log("Before Swaping: ", "a:", a, "b:", b);
  [a, b] = [b, a];
  console.log("After Swaping: ", "a:", a, "b:", b);
}
swapping();

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

function Compounding(x: number): void {
  console.log("Initial value :", x);
  x += 2;
  console.log("After Adding :", x);
  x -= 2;
  console.log("After Subtracting :", x);
  x *= 2;
  console.log("After Multiplying :", x);
  x /= 2;
  console.log("After Dividing :", x);
}
Compounding(10);

// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function Adding(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(Adding(10, 40));

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function Greeting(userName: string = "anonymous"): string {
  return `Hello ${userName}`;
}

console.log(Greeting("Yahya"));
console.log(Greeting());

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function Declarations(num: number) {
  return num * num;
}
const Expressions = function (num: number) {
  return num * num;
};
console.log(Declarations(10));
console.log(Expressions(9));

// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

let car = {
  make: "AUDI",
  model: "A4",
  year: 2020,
};
console.log(car.model);

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

type Car = {
  make: string;
  model: string;
  year: number;
  color?: string;
};

let cars: Car = {
  make: "AUDI",
  model: "A4",
  year: 2020,
};

cars.color = "Black";
cars.year = 2021;

console.log(cars);

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function loggingObject(obj: Object): void {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
loggingObject({ make: "Bugatti", model: "Chiron", year: 2022, color: "Black" });

// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.
function Lenght(str: string): number {
  return str.length;
}
console.log(Lenght(" GOVERNOR IT INITIATIVE"));

// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
function Casing(str: string): void {
  console.log("UPPER CASE : ", str.toUpperCase());
  console.log("LOWER CASE : ", str.toLowerCase());
}
Casing(" Irfan Khan ");

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
function replacing(sentence: string): string {
  return sentence.replace(/JavaScript/g, "TypeScript");
}

console.log(replacing("I am learning JavaScript "));


