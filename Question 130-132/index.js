"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
var mainfunc_1 = require("./mainfunc");
(0, mainfunc_1.add)(4, 4);
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
var mainfunc_2 = require("./mainfunc");
var student = new mainfunc_2.Student("Usman", 25);
student.print();
