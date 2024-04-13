var _this = this;
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
function week(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Not a valid day");
            break;
    }
}
week(2);
//Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function seasons(months) {
    switch (months) {
        case 1:
        case 2:
        case 3:
            return "Spring";
            break;
        case 4:
        case 5:
        case 6:
            return "Summer";
            break;
        case 7:
        case 8:
        case 9:
            return "Fall";
            break;
        case 10:
        case 11:
        case 12:
            return "Winter";
            break;
        default:
            return "Not a valid month";
    }
}
console.log(seasons(1));
console.log(seasons(12));
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateExpression(expression) {
    switch (expression) {
        case "+":
            return "Addition";
            break;
        case "-":
            return "Subtraction";
            break;
        case "*":
            return "Multiplication";
            break;
        case "/":
            return "Division";
            break;
        default:
            return "Not a valid expression";
    }
}
console.log(evaluateExpression("/"));
console.log(evaluateExpression("-"));
// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
function looping(num) {
    for (var i = 1; i <= num; i++) {
        console.log(i);
    }
}
looping(10);
// Question 119: Create a while loop that logs "Hello, World!" 5 times.
function logging(num) {
    while (num > 0) {
        console.log("Hello, World!");
        num--;
    }
}
logging(5);
// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
function favMovies(movies) {
    for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
        var movie = movies_1[_i];
        console.log(movie);
    }
}
favMovies(["Star Wars", "Star Wars 2", "Star Wars 3"]);
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
function skipping(num) {
    for (var i = 1; i <= num; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
skipping(10);
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
function counting(num) {
    while (num > 0) {
        if (num === 5) {
            break;
        }
        console.log(num);
        num--;
    }
}
counting(10);
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function firstVowel(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            console.log(str[i]);
            break;
        }
    }
}
firstVowel("rpstunk");
// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
var my_Name = {
    name: "Muhammad Saad",
    getName: function () {
        return this.name;
    }
};
console.log(my_Name.getName());
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
var my_intro = {
    name: "Muhammad Saad",
    age: 21,
    get_intro: function () {
        return this.name + " is " + this.age + " years old";
    }
};
console.log(my_intro.get_intro());
// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
var uniName = {
    name: "GIAIC",
    outer: function () {
        var _this = this;
        console.log(this.name);
        var inner = function () {
            console.log(_this.name);
        };
        inner();
    }
};
uniName.outer();
// Question 127: Convert a traditional function expression to an arrow function.
var traditionalFunction = function (a, b) {
    console.log(a + b);
};
var arrowFunction = function (a, b) {
    console.log(a + b);
};
traditionalFunction(4, 4);
arrowFunction(4, 4);
// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multipleParameters = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var multiplicity = num.reduce(function (total, number) { return total * number; }, 1);
    console.log(multiplicity);
};
multipleParameters(1, 4, 7, 7, 10);
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var season = {
    name: "GIAIC",
    traditionalFunction: function () {
        console.log(this.name);
    },
    arrowFunction: function () {
        console.log(_this.name);
    }
};
season.traditionalFunction();
season.arrowFunction();
