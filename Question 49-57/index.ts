// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function hobbies(...hobby: string[]) {
  hobby.forEach((hobby) => {
    console.log(`I enjoy ${hobby}`);
  });
}
hobbies("Cricket", "Football", "swiming");

// Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let myIdeal_Day = `My ideal day would involve :
1) Spending Quality time with my Family.
2) Day spend on working om my projects.
3) Cook a delicious dinner with fresh ingredients, followed by a cozy movie night at home.
`;
console.log(myIdeal_Day);

// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function Area(height: number, width: number): number {
  return height * width;
}
// Using Arrow Function
let Area_byArrow = (height: number, width: number): number => {
  return height * width;
};
console.log(Area(5, 3));
console.log(Area_byArrow(4, 4));

// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartPhone = {
  Brand: "Techno",
  model: "Techno Spark 6 Go",
  Specifications: {
    storage: "128 GB",
    screenSize: "6 in",
    batteryLife: "10 hrs",
  },
};
console.log(smartPhone);

// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let programmerSkills = {
  languages: ["JavaScript", "Python", "Type Script"],
  tools: ["Visual Studio Code", "Git", "Docker"],
  frameworks: ["React", "Node.js", "Django"],
};
let { languages, tools, frameworks } = programmerSkills;
console.log(
  `Language : ${languages[2]}, Tools : ${tools[2]}, Frame Works : ${frameworks[2]}`
);

// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function makinglist(key: string, value: string) {
  let lists = {};
  (lists[key] = value), console.log(lists);
}
makinglist("Name", "Muhammad Saad");
makinglist("Roll No", "00118719");

// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

let numbers = [1, 2, 3, 4, 5, 6];
function doublingNumbers(val: number): number[] {
  let doubling = numbers.map((numbers) => numbers * val);
  return doubling;
}
console.log(doublingNumbers(2));

// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
function keepstringsOnly(items: any[]): void {
  let filteredStrings = items.filter((item) => typeof item === "string");
  console.log(filteredStrings);
}
keepstringsOnly([
  "Names",
  "Fruits",
  "True",
  true,
  false,
  10,
  203,
  11,
  "Passed",
]);

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

function findingAverage(grades: number[]): void {
  if (grades.length !== 0) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    console.log(`The average is  ${sum / grades.length}`);
  }
}
findingAverage([1, 2, 3]);
findingAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
