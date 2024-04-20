var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Question 133: Write a JavaScript object and convert it into a JSON string.
var person = {
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
var jsonString = JSON.stringify(person);
console.log(jsonString);
// Question 134: Take a JSON string and parse it into a JavaScript object.
var student = "{\n    \"name\" : \"daniyal\",\n    \"age\" : 26,\n    \"isStudent\" : false\n}";
var cosnoling = JSON.parse(student);
console.log(cosnoling);
// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var jsonString2 = JSON.stringify(person, null, 2);
console.log(jsonString2);
// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (var i = 0; i < 10; i++) {
    console.log("The value is : ", i);
}
// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {
    for (var i = 1; i <= 5; i++) {
        console.log("The value is : ", i);
    }
}
catch (error) {
    console.log("Something went wrong", error.message);
}
// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
function operations(a, b) {
    if (a === b) {
        // First reserved word "if"
        var adding = a + b; // Second Reserved word "let"
        return adding; // Third Reserved word "return"
    }
}
// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// let return = 5 ; This line will generate an error
console.log(" We can't use a reserved word in javascript as variable name");
//  Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var fetching;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    fetching = _a.sent();
                    console.log(fetching);
                    return [2 /*return*/];
            }
        });
    });
}
console.log(" The await keyword in asynchronous JavaScript is significant as it allows you to pause the execution of an async function until a promise is resolved, and to obtain the resolved value of the promise. It's primarily used in combination with async functions to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and maintain. ");
// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
promise.then(function (message) {
    console.log(message);
});
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var handlingPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Muhammad Saad");
    }, 3000);
});
handlingPromise
    .then(function (message) {
    console.log(message);
})
    .catch(function (err) {
    console.log(err);
});
// Question 144: Explain the use of the Promise.all() method with an example.
var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function (message) {
        resolve("Promise 1 is resolved");
    }, 1000);
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function (message) {
        resolve("Promise 2 is resolved");
    }, 2000);
});
var promise3 = new Promise(function (resolve, reject) {
    setTimeout(function (message) {
        resolve("Promise 3 is resolved");
    }, 3000);
});
Promise.all([promise1, promise2, promise3]).then(function (message) {
    console.log(message);
});
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function consolingCallbacks(callback, argument1, argument2, argument3) {
    callback(argument1, argument2, argument3);
}
function operation(a, b, c) {
    console.log(a + b + c);
}
consolingCallbacks(operation, 1, 2, 3);
// Question 146: Show an example of a callback function used to filter an array of numbers.
function filtering(callback, arr1) {
    callback(arr1);
}
function arrays(arr) {
    console.log(arr.filter(function (num) { return num > 0; }));
}
filtering(arrays, [-4, -3, -2, -1, 0, 1, 2, 3, 4]);
// Question 147: Explain how to handle errors in a callback pattern.
function errorhandling(callback) {
    var error = new Error(" Unable to fetch");
    var data = "Some data";
    if (Math.random() < 0.5) {
        callback(error, data);
    }
    else {
        callback(error);
    }
}
