// Conditional Statements 
// 1) if statement 

// let num = 5;

// if(num === 5) {
//     console.log("Num is 5");
// }

// {
//   //block code => combine all lines in 1 single statement
// }

// let age = 16;

// if(age >= 18) {
//     console.log("Can vote");
// }
// if(age < 18) {
//     console.log("Cannot vote");
// }

// 2) if-else statements 

let color;
let mode = "light";

if(mode === "dark") {
    color = "black";
}
else {
    color = "white";
}
// console.log(color);

// 3) else-if statements 

// let age = 17;
// if(age < 18) {
//     console.log("Child");
// }
// else if(age > 60) {
//     console.log("Senior");
// }
// else {
//     console.log("Adult");
// }

// Question: Get a number from the user. Check whether number is multiple of 7 or not?

let num = prompt("Enter a number");

if(num % 7 === 0) {
    console.log("Multiple of 7");
}
else {
    console.log("Not a multiple of 7");
}