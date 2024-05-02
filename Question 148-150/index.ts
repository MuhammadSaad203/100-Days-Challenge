// Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.

setTimeout(()=>{
    console.log("Hello World");
},2000);

// Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log('Start');

setTimeout(() => {
    console.log('Timer callback executed');
}, 2000);

console.log('End');

// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");