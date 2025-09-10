// "use strict"

// console.log("Javascript");
// console.log("Introduction to JS"); // print statement in JS

// Introductin to JS (Single line Commment)

/*

Hi 
Hello
Multiline Comment

*/

// ---------------------------------------------------------------------
// Variables in JS 
// Variables are containers for the data 

// fullName = "Rohit Sharma";
// age = 25;
// price = 10.51;
// age = 30;

// console.log(fullName, age, price);

// Variable Rules 

// 1) Variable names are case sentitive. "a", "A" are different 
// age = 45;
// Age = 50;

// 2) Only letters, digits, underscore(_) and dollar ($) is allowed. (not even space)
// full_Name = "Virat Kohli";
// user1 = "Rohit";
// user2 = "Virat"

// 3) Only letter, underscore(_), dollar($) can be the first character.
// _user1 = "Rohit";
// _user2 = "Virat";

// 4) Reserved keywords cannot be variable names.
// eg: for, while, if, else 

// Use Camel Case to write variable names (just good practise not compulsory)
// fullName 
// isLoggedIn 

// ---------------------------------------------------------------------------------------

// let, var, const (to declare the variables)
// let fullName = "Rohit Sharma";
// var price = 15.30;
// const userName = "Rohit";

// JS is a loosly type language 
// we do not have to define the type of variable (int, string , boolean)

// var: Variables can be re-declared and updated. A function scope variable.
// let: Variables cannot be re-declared but can be updated. A block scope variable.
// const: Variables cannot be re-declared or updated. A block scope variable.

// var user = "Rahul";
// console.log("User is ", user);

// //After 1000 lines of code

// var user = 20;
// console.log("Updated user is ", user);

// let user1 = "Virat";
// console.log("User 1 is ", user1);

// user1 = "Rohit";
// console.log("Updated user is", user1);

// const userId = 1234567;
// console.log("User id ", userId);

// userId = 123;
// console.log("New id ", userId);

// const accountNumber = 123;
// console.log("Account no is ", accountNumber);

// Note: Always try to use only let and const variables do not use var
const accountId = 12345;
let accountEmail = "abcd@gmail.com";
let password = "123";
let nothing = null;
let accountCity;

console.table([accountId, accountEmail, password, nothing, accountCity]);

// alert("Hello world 12345");

console.log("Hello");  
console.log("World");
console.log(2+3);
console.log(2
    +
3);

// Code should have high readablity 
console.log(2+3);
