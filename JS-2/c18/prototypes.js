// Everything in JS is an object

// let arr = ["Rohit", "Virat"];

// let obj = {
//     name: "Rohit",
//     city: "Mumbai",
//     getIntro: function () {
//         console.log(`${this.name} from ${this.city}`)
//     }
// }

// function fun() {

// }

// let obj2 = {
//     name: "Vinay"
// }

// console.log(obj2.name); //Vinay
// console.log(obj2.city); //undefined

//Prototype Inheritance

// //Never do this
// obj2.__proto__ = obj;

// console.log(obj2.city); //Mumbai
// console.log(obj2.getIntro()); 

Function.prototype.myFunction = function () {
    console.log("Some imp. function");
}

function fun() {

}

function fun2() {

}