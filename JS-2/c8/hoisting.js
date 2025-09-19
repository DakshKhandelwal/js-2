//Hoisting in JS
// Trying to access the variables and functions before initializing

// console.log(a);
// getName();

// var a = 5;

// function getName() {
//     console.log("Hello world");
// }

// Memory Allocation       Code Execution
// a: undefined            undefined
// getName: {...}          Hello world

// Output 
// undefined 
// Hello world

// ---------------------------------------------------------------------

// console.log(a);
// getName();

// var a = 5;

// var getName = function() {
//     console.log("Hello world");
// }

// Memory Allocation       Code Execution
// a: undefined            undefined
// getName: undefined      Type error

// Output 
// undefined 
// Error

// -----------------------------------------------------------------------

// var variables are hoisted in JS 

// Are let and const variable also hoisted in JS?
 
// Temporal Dead Zone
// console.log("Hello world");
// console.log(a);
// let a = 10;

//Yes let and const variable are also hoisted but they are stored in Temporal Daed Zone
// Temporal Dead Zone: Time b/w which variables are hoisted and just before their initalization

// var a1 = 200;
// console.log("Hello world");

// console.log(a2); 
// console.log(a1);
// let a2 = 10;

// console.log("Learning hoisting in JS");

console.log("Hello");

let a = 100;
var b = 200;

const d = 400;
const c = 300;

console.log(b);
console.log(c);

console.log(d);

// var << let << const 