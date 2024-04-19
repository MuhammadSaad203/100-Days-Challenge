"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.Student = exports.add = void 0;
// For Question : 130 to export it to the other file
function add(a, b) {
    console.log("adding : ", a + b);
}
exports.add = add;
// For Question 131 to export the class
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.print = function () {
        console.log(this.name + " is " + this.age + " years old");
    };
    return Student;
}());
exports.Student = Student;
// For Question 132
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    return Calculator;
}());
exports.Calculator = Calculator;
