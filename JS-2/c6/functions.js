// Functions in JS
// Block of code that performs a specific task and can be invoked whenever required

// console.log("Hello");

// "abc".toUpperCase();

// [1, 2, 3, 4].push(5);

//function definition
// function functionName() {
//     // code
// }

// functionName(); //function call

// console.log("Javascript");
// console.log("We are learning JS functions");

// //100 lines
// console.log("Javascript");
// console.log("We are learning JS functions");

// //100 lines
// console.log("Javascript");
// console.log("We are learning JS functions");

// function myFunction() {
//     console.log("Javascript");
//     console.log("We are learning JS functions");
// }

// myFunction();
// myFunction();
// myFunction();

// function functionName(param1, param2) { //parameters
//     //code 
// }

// functionName(arg1, arg2); //arguments

// function printMsg(msg) {
//     console.log(msg);
// }

// printMsg("Learning JS");

// function sum(x, y) {
//     // x and y are local variables can't be accesses outside the block
//     let result = x + y;
//     return result;
//     // console.log("Hello world");
// }

// let res = sum(2, 3);
// console.log(sum);

// const sumFunction = function (x, y) {
//     return x+y;
// }

// // console.log(sumFunction);
// console.log(sumFunction(2,3));


// Arrow functions 
// Compact way to write a function 

// const storeFunction = (param1, parm2) => {
//     //code
// }

// storeFunction(x,y);

// let sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(2,3));

// let myFunction = () => {
//     console.log("Hello world");
// }

// console.log(typeof myFunction);

// myFunction();

// myFunction = "JS";
// console.log(typeof myFunction);


// Question: Write a function using function keyword which takes
// string as an argument and returns no. of vowels in that string.

// "Hello" => 2

// function countVowels(str) {
//     let count = 0;
//     console.log(str);
//     str = str.trim().toLowerCase();
//      console.log(str);
//     // for, while, for-of
//     for(const char of str) {
//         // console.log(char);
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// // let result = countVowels("Hello");
// let result = countVowels("   JAvascript   ");
// console.log(result);

//Passing default values as a param
// function loginMessage(user1 = "student", user2 = "student2") {
//     if(!user1) {
//         console.log("Please enter user name", user1);
//         return;
//     }
//     console.log(`${user1} loggedin and ${user2} too`);
// }

// loginMessage('Vinay', "Chandan");

// Rest operator: ... it spreads the argument and returns it in array
// function calculateCartPrice(val1, val2, val3, ...num) {
//     console.log(val1, val2, val3);
//     console.log(num);
// }

// calculateCartPrice(10, 20, 30, 40);

// Immediately Invoked Function Expression (IIFE)
(function myFunction() {
    console.log("Call it immediately");
})();

//methods and function
// Whenever we attach a function to specific objects like arrays, strings
// we call those functions as methods 

[1,2,3].pop()

"Hello World".toUpperCase();

// [1,2,3].toUpperCase();

// Higher Order Functions (HOF): Methods or functions which takes function as 
// a parameter or returns a function is called a HOF.
