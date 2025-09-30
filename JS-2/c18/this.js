"use strict"

// console.log("Hello");
// console.log(this);
// console.log(window);

// this is referring to the global object (window obj) for the browser  and {} for nodejs

// function x() {
//     console.log(this);
// }

// x();

// window.x();

// this inside the non-strict mode (this substitution)

// If the value of this keyword is undefined or null, then this keyword
// will be replaced by the global object only in non-strict mode

// this inside an object (this keyword refers to the obj itself inside a function)
// const obj = {
//     a: 10,
//     x: function() {
//         console.log("World");
//         console.log(this);
//     },
//     c: this  //window obj
// }

// console.log(this);
// console.log(obj);

// obj.x();

// const obj = {
//     a: 10,
//     x: () => {
//         console.log("World");
//         console.log(this);
//     },
//     c: this  //window obj
// }

// obj.x();

// const user = {
//     userName: "Vinay",
//     age: 22,

//     welcomeMessage: function() {
//         console.log(`${this.userName} welcome to the JS course`);
//         console.log(this);
//     }
// }

// user.welcomeMessage();

// user.userName = "Yogesh";
// user.welcomeMessage();

// --------------------------------------------------------------------------

// Call, apply, bind method (sharing methods)

// const student = {
//     name: "GokulRaj",
//     printName: function () {
//         console.log(this.name);
//     }
// }

// student.printName();

// const student2 = {
//     name: "Sahil"
// }

// student.printName.call(student2);

// let name1 = {
//     fName: "Rohit",
//     lName: "Sharma"
// }

// let name2 = {
//     fName: "Virat",
//     lName: "Kohli"
// }

// let printFullName = function(city, state, country) {
//     console.log(`${this.fName} ${this.lName} lives in ${city} ${state} ${country}`);
// }

// printFullName.call(name1, "Mumbai", "Maharashtra", "India");
// printFullName.call(name2, "Delhi", "UT", "India");

// apply method: It will execute here only and in apply we pass arguments as an array list

// printFullName.apply(name1, ["Mumbai", "Maharashtra", "India"])
// printFullName.apply(name2, ["Delhi", "UT", "India"])

// bind method: It returns a function bind to that obj and we can use it anywhere in the code

// let printName = printFullName.bind(name2, "Delhi", "UT", "India");
// console.log(printName);
// // printName();

// name2.fName = "Rahul";
// printName();

// -------------------------------------------------------------------

// Currying in JS 

// function add(a, b, c) {
//     return a+b+c;
// }

// console.log(add(2, 3, 5));

// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// const add = (a) => (b) => (c) => a+b+c;

// console.log(add(2)(3)(5));


// to, subject, body => email to be sent

// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending email to ${to} with subject ${subject} and body ${body}`)
//         }
//     }
// }

const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending email to ${to} with subject ${subject} and body ${body}`);

let step1 = sendAutoEmail("random@gmail.com");

let step2 = step1("New order confirmation");

step2("Hello random, here is something for you!");
