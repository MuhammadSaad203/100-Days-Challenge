// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return "The current date is : ".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDate());
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1);
    var difference = newYear.getTime() - today.getTime();
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Question 99: Generate a date object representing your next birthday and log it to the console.
function nextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var birthdayDays = nextBirthday(11, 5);
console.log("My next birthday is on ", birthdayDays.toLocaleDateString());
// Question 100: Use the JavaScript Math object to find the square root of 144.
console.log("The square root of 144 is : ".concat(Math.sqrt(144)));
// Question 101: Generate a random integer between 1 and 10.
function randomNumbers(num) {
    return Math.floor(Math.random() * num) + 1;
}
console.log(randomNumbers(10));
// Question 102: Calculate and log the absolute difference between the number -5 and 5.
function difference(num1, num2) {
    return Math.abs(num1 - num2);
}
console.log(difference(-5, 5));
// Question 103: Write a function that returns a random boolean value, true or false.
function randomBoolean() {
    var result = Math.random();
    if (result >= 0.5) {
        return true;
    }
    else {
        return false;
    }
}
console.log(randomBoolean());
// Question 104: Create a function that generates a random hexadecimal color code.
function randomHexColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "#".concat(red.toString(16).padStart(2, '0')).concat(green.toString(16).padStart(2, '0')).concat(blue.toString(16).padStart(2, '0'));
}
console.log(randomHexColor());
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function diceRolling(num) {
    return Math.floor(Math.random() * num) + 1;
}
console.log(" For dice number would be '6' :");
console.log(diceRolling(6));
// Question 106: Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisible(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log(isDivisible(14));
console.log(isDivisible(6));
// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function comparison(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
console.log(comparison("Hello", "hello"));
console.log(comparison(" Hamza ", "Ahmed"));
// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
function isMorning() {
    var today = new Date();
    var current_time = today.getHours();
    if (current_time < 12) {
        console.log("Good Morning");
    }
    else {
        console.log("Good Afternoon");
    }
}
isMorning();
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function createStudentGrade(num) {
    if (num >= 90) {
        return "A";
    }
    else if (num >= 80) {
        return "B";
    }
    else if (num >= 70) {
        return "C";
    }
    else if (num >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(createStudentGrade(50));
console.log(createStudentGrade(94));
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function studentAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age >= 13 && age <= 19) {
        return "teenager";
    }
    else if (age >= 20) {
        return "adult";
    }
    else {
        return "unknown";
    }
}
console.log(studentAge(12));
console.log(studentAge(17));
console.log(studentAge(21));
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
var capitals = new Map();
capitals.set("Pakistan", "Islamabad");
capitals.set("New Zealand", "Wellington");
capitals.set(" Turkiye ", " Istanbul");
console.log(capitals);
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is : ".concat(countries.get("Canada")));
    }
    else {
        console.log("No Capital");
    }
}
var country = new Map();
country.set("Pakistan", "Islamabad");
country.set("Canada", "Ottawa");
checkCanada(country);
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "Usman");
students.set(2, "Mehmed");
students.set(3, "Murad");
students.forEach(function (name, id) {
    console.log("Student ID : ".concat(id, " \n  Name : ").concat(name));
});
