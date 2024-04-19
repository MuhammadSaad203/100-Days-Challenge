// For Question : 130 to export it to the other file
export function add(a: number, b: number) : void {
    console.log("adding : " , a + b )
}

// For Question 131 to export the class
export class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this.name + " is " + this.age + " years old");
    }
}

// For Question 132
export class Calculator {
    // This is Class to export in to the main file.
}