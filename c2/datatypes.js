// Primitive Datatypes

// 1) Number 
let score = 33;
// console.log(score);
// console.log(typeof score);

let price = 13.4567;
let myPrice = price;
// console.log(price);
// console.log(typeof price); //number

let count = Number(10);
// console.log(count);
// console.log(typeof count);

// 2) String 
let myStr = "Chandan";
// console.log(myStr);
// console.log(typeof myStr);

let user = String("Yogesh");
// console.log(user);
// console.log(typeof user);  //string

// 3) Boolean 
let isLoggedIn = true;
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

let isAuthorized = Boolean(false);
// console.log(isAuthorized);
// console.log(typeof isAuthorized); //boolean

// 4) null 
let userId = null;
// console.log(userId);
// console.log(typeof userId); //object

// 5) undefined 
let userEmail = undefined;
// console.log(userEmail);
// console.log(typeof userEmail); //undefined

let count1;
// console.log(count1);
// console.log(typeof count1); //undefined

// 6) bigint 

let primeNumber = 33333333444444445666666666666222222223n;
// console.log(primeNumber);
// console.log(typeof primeNumber); //bigint

// 7) Symbol 
let uniqueValue1 = Symbol("Hi");
// console.log(uniqueValue1);
// console.log(typeof uniqueValue1); //symbol

let uniqueValue2 = Symbol("Hi");
// console.log(uniqueValue2);
// console.log(typeof uniqueValue2);

// console.log(uniqueValue1 == uniqueValue2); //both values are different (unique Values)

// -----------------------------------------------------------------------------------
// Non-primitive Datatypes 

// Note: Eveything in JS is an object

// 1) Array (variable in size and heterogenous)
const marks = [20, 30, 40, 50, 60]; 
// console.log(marks);
// console.log(typeof marks); //object

const heroes = ["superman", "batman", "spiderman"];
// console.log(heroes);
// console.log(typeof heroes); //object

const everything = ["heroes", "villans", 2, 10, null, undefined, true, false, 23];
// console.log(everything);
// console.log(typeof everything);

// console.log(everything.length);
// console.log(everything[0]); //firstElement
// console.log(everything[1]);
// console.log(everything[everything.length - 1]); //lastElement
// console.log(everything[-1]); //undefined
// console.log(everything[100]); //undefined

// everything[12] = "Hello12";
// console.log(everything);

// 2) Objects 

// {
//     key: value
// }

const obj = {}; //empty obj

const newObj = {
    firstName: "Virat",
    age: 35,
    isLoggedIn: false,
    score: [20, 50, 108, 120, 40],
    marks: {
        test: 30,
        ipl: 50
    }
}

// console.log(newObj);
// console.log(typeof newObj); //object
// console.log(newObj.firstName);
// console.log(newObj.age);
// console.log(newObj.score[0]);
// console.log(newObj.marks.ipl);

// 3) Functions 

// function definition
// function printName(name) {
//     console.log("My name is ", name);
// }

// printName("Rohit"); //For function call we use parentheses ()
// console.log(typeof printName); //function

const printName = function () {
    console.log("Hello world");
}

// console.log(printName);
// console.log(typeof printName); //function 

// printName();

// -----------------------------------------------------------------------
// Memory 
// Stack(Primitive Datatypes, Immutable) and Heap (Non-primitive Datatype, Reference Datatype) 

let firstName = "Rohit"
let anotherName = firstName;
firstName = "Virat";
// console.log(firstName);
// console.log(anotherName);

let obj1 = {
    firstName: "Rohit",
    age: 23
}

let obj2 = obj1;

obj2.age = 30;

console.log(obj1);
console.log(obj2);