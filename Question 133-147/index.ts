// Question 133: Write a JavaScript object and convert it into a JSON string.
const person = {
  name: "Babar",
  age: 30,
  city: "lahore",
  isCricketer: true,
  friends: ["Sami", "shamil", "Usman"],
  achivements: {
    football: 10,
    basketball: 20,
    cricket: 30,
  },
};
let jsonString = JSON.stringify(person);
console.log(jsonString);

// Question 134: Take a JSON string and parse it into a JavaScript object.
let student = `{
    "name" : "daniyal",
    "age" : 26,
    "isStudent" : false
}`;
let cosnoling = JSON.parse(student);
console.log(cosnoling);

// Question 135: Explain how you can format a JSON string with proper indentation for readability.
let jsonString2 = JSON.stringify(person, null, 2);
console.log(jsonString2);

// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (let i = 0; i < 10; i++) {
  console.log("The value is : ", i);
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.

try {
  for (let i = 1; i <= 5; i++) {
    console.log("The value is : ", i);
  }
} catch (error) {
  console.log("Something went wrong", error.message);
}
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.

// Question 139: List three reserved words in JavaScript and create a valid use case for each.

function operations(a: number, b: number) {
  if (a === b) {
    // First reserved word "if"
    let adding = a + b; // Second Reserved word "let"
    return adding; // Third Reserved word "return"
  }
}

// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

// let return = 5 ; This line will generate an error
console.log(" We can't use a reserved word in javascript as variable name");

//  Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript

async function fetchData() {
  let fetching = await fetchData();
  console.log(fetching);
}
console.log(
  " The await keyword in asynchronous JavaScript is significant as it allows you to pause the execution of an async function until a promise is resolved, and to obtain the resolved value of the promise. It's primarily used in combination with async functions to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain. "
);

// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});
promise.then((message) => {
  console.log(message);
});

// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
let handlingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Muhammad Saad");
  }, 3000);
});
handlingPromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// Question 144: Explain the use of the Promise.all() method with an example.

let promise1 = new Promise((resolve, reject) => {
  setTimeout((message) => {
    resolve("Promise 1 is resolved");
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout((message) => {
    resolve("Promise 2 is resolved");
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout((message) => {
    resolve("Promise 3 is resolved");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((message) => {
  console.log(message);
});

// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function consolingCallbacks(
  callback: (a: number, b: number, c: number) => void,
  argument1: number,
  argument2: number,
  argument3: number
) {
  callback(argument1, argument2, argument3);
}
function operation(a: number, b: number, c: number) {
  console.log(a + b + c);
}

consolingCallbacks(operation, 1, 2, 3);

// Question 146: Show an example of a callback function used to filter an array of numbers.
function filtering(
    callback: (arr: number[]) => void,
    arr1: number[]
) {
    callback(arr1);
}

function arrays(arr: number[]) {
    console.log(arr.filter(num => num > 0));
}

filtering(arrays, [-4,-3,-2,-1,0,1, 2, 3, 4]);

// Question 147: Explain how to handle errors in a callback pattern.

function errorhandling( callback : (error : Error | null , data? : string ) => void){
    let error = new Error(" Unable to fetch");
    let data = "Some data";
    if(Math.random() < 0.5){
        callback(error, data);
    }else{
        callback(error);
    }
}

