// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

import {add} from "./mainfunc";
add(4,4);

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
import { Student } from "./mainfunc";

const student = new Student("Usman", 25);

student.print();

// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// importing the Class
import { Calculator } from "./mainfunc";
// Importing the Function
import { fun1,fun2 } from "./fun";

