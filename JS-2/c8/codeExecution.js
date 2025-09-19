//How JS executes the code

// Everything in JS executes inside the execution context 

// Javascript is a synchronous single-threaded language

// var a = 2;

// function square (num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(a); //4
// var square5 = square(5); //25

//Call stack is maintaining the order of execution of execution context.

// printName();

// console.log(x);
// var x = 5;

// function printName() {
//     var a = 5;
//     console.log("Hello JS");
// }

// Output 
// Hello JS 
// undefined 

// Memory Allocation                  Code Execution
// x: undefined                       //Hello JS
// printName: {...}                   //undefined
// x: 5

// --------------------------------------------------------------

var apple = 1;

a();
b();

console.log(apple);

function a() {
    var apple = 10;
    console.log(apple);
}

function b() {
    var apple = 100;
    console.log(apple);
}

//Output
// 10
// 100 
// 1

// Note: var variable is a function scope