// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function position( str : string ) :number {
    return str.indexOf("code");
  }
  console.log(position(" I am  learning how to code in Java Script ")); 
  
  // Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.
  function checking( str : string ) : boolean {
    return str.includes("JavaScript");
  }
  console.log(checking("I am  learning how to code in JavaScript"));

  // Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
  function extracting( str : string ) : string {
    return str.substring(0,14);
  }
  console.log(extracting("I am  learning how to code in JavaScript"));

// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function rounding( num : number ) : number {
    return Math.round(num);
  
}
console.log(rounding( 1234.6784));

// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

function converting( str : string) : number {
    return parseFloat(str);
}
console.log(converting("203"));
console.log(converting(203));

// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isNumber( val : any) : boolean {
    return isNaN(val);
}

console.log(isNumber(203));
console.log(isNumber("Bey"));

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
 let favFruits = ["Apple", "Banana", "Mango"];
 console.log(`Before pushing ${favFruits}`);
 favFruits.push("Orange");
 console.log(`After pushing ${favFruits}`);

 // Question 92:  Write a function to remove the last element from an array and return the removed element.
 function removing<T>( arr : T[]) : any {
    if (arr.length > 0 ) {
        const removedElement = arr.pop();
        return removedElement;
    }else {
        return undefined
    }
    
 }
 console.log(removing([1,2,3,4]))

 // Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

let change = favFruits.indexOf("Banana")

favFruits[change] = "Mango";
console.log(favFruits);

// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
let names : string[] = ["Rumman","Sarfaraz","Haasan","Noman"];
let lens : number[] = names.map(name => name.length);
console.log("The lenght of these names are :",lens);

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function filtering( num : number[]) : number[] {
    return num.filter(n => n > 10);
}
console.log(filtering([1,5,8,11,3,12,15,89,0]));

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function sum(arr : number[]) : number {
    return arr.reduce((arr1,arr2) => arr1 + arr2);
}

console.log(sum([1,5,8,11,3,12]));

