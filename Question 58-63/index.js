// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function AverageScore(numScore) {
    if (numScore !== undefined && numScore.length > 0) {
        var sum = 0;
        for (var i = 0; i < numScore.length; i++) {
            sum += numScore[i];
        }
        var average = sum / numScore.length;
        console.log(average);
    }
    else {
        console.log("Please enter valid number of scores");
    }
}
AverageScore([100, 90, 80, 70]);
AverageScore([1, 2, 3, 4]);
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function addSpecial(value) {
    return function magicbox(another_value) {
        return value + another_value;
    };
}
var adder = addSpecial(1);
console.log(adder(2));
console.log(adder(20));
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var userProfile = {
    name: "Muhammad Saad",
    age: 21,
    gender: "Male",
    hobby: "coding",
    introduce: function () {
        console.log("My name is " + this.name + " and I am " + this.age + " years old.");
    }
};
userProfile.introduce();
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory[VehicleCategory["Car"] = 0] = "Car";
    VehicleCategory[VehicleCategory["Truck"] = 1] = "Truck";
    VehicleCategory[VehicleCategory["Motorcycle"] = 2] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
console.log(VehicleCategory.Truck);
var studentInfo = {
    name: "Muhammad Saad",
    age: 21,
    classes: ["Power Plant", "AI & IOT", "Mechanical Vibration"],
};
console.log(studentInfo);
function getArea(Shape) {
    if (Shape.kind == "Circle") {
        return Math.PI * Math.pow(Shape.radius, 2);
    }
    else {
        return Shape.width * Shape.height;
    }
}
console.log(getArea({ kind: "Circle", radius: 5 }));
console.log(getArea({ kind: "Rectangle", width: 5, height: 4 }));
