// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function AverageScore(numScore: number[]): void {
  if (numScore !== undefined && numScore.length > 0) {
    let sum = 0;
    for (let i = 0; i < numScore.length; i++) {
      sum += numScore[i];
    }
    let average = sum / numScore.length;
    console.log(average);
  } else {
    console.log("Please enter valid number of scores");
  }
}

AverageScore([100, 90, 80, 70]);
AverageScore([1, 2, 3, 4]);

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function addSpecial(value: number): any {
  return function magicbox(another_value: number): number {
    return value + another_value;
  };
}
let adder = addSpecial(1);
console.log(adder(2));
console.log(adder(20));

// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let userProfile = {
  name: "Muhammad Saad",
  age: 21,
  gender: "Male",
  hobby: "coding",
  introduce: function () {
    console.log(
      "My name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};
userProfile.introduce();

// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum VehicleCategory {
  Car,
  Truck,
  Motorcycle,
}
console.log(VehicleCategory.Truck);

// Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
  name: string;
  age: number;
  classes: string[];
}

let studentInfo: Student = {
  name: "Muhammad Saad",
  age: 21,
  classes: ["Power Plant", "AI & IOT", "Mechanical Vibration"],
};
console.log(studentInfo);

// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Circle = {
  kind: "Circle";
  radius: number;
};
type Rectangle = {
  kind: "Rectangle";
  width: number;
  height: number;
};

type shape = Circle | Rectangle;

function getArea(Shape: shape): number {
  if (Shape.kind == "Circle") {
    return Math.PI * Shape.radius ** 2;
  } else {
    return Shape.width * Shape.height;
  }
}
console.log(getArea({ kind: "Circle", radius: 5 }));
console.log(getArea({ kind: "Rectangle", width: 5, height: 4 }));
