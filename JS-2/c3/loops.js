// Loops in JS 
// Loops can be used to execute a piece of code again and again 
// 1) For loop 

// for(let i = 1; i<=10; i++) {
//     console.log("Hello world", i);
// }

// calculate sum of numbers from 1 to 10 
// let sum = 0;
// for(let i=1; i<=10; i++) {
//     sum += i;
// }
// console.log(sum);

// for(var i=1; i<=10; i++) {
//     console.log("i=", i);
// }
// console.log(i);

// 2) Infinite loop: Loop that never ends (condition will always be true)

// for(let i=1; i>=0; i++) {
//     console.log("i=", i);
// }

// 3) while loop 

// let i=1;
// while(i<=5) {
//     console.log("i=", i);
//     i++;
// }

// 4) do-while loop 

// let i=8;
// do {
//     console.log("i=",i);
//     i++;
// }while(i<=10);

// 5) for-of loop: It is used to iterate over arrays or strings or Maps

// const arr = [1, 2, 3, 4, 5];

// for(const num of arr) {
//     console.log(num);
// }

// const strArr = ["Rohit", "Virat", "Rahul", "Ajay"];

// for(const name of strArr) {
//     console.log(name);
// }

// const myStr = "I love Javascript";

// for(let char of myStr) {
//     console.log(char);
// }

// Maps: are use to store unique values in same order as inserted

// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("Ch", "China");
// map.set("Fr", "France123");
// console.log(map);

// for(const item of map) {
//     console.log(item);
// }

// for(const [key, value] of map) {
//     console.log(key, value);
// }

// Destructuring of Array 
// const arr = ["In", "Fr", "Ch", "USA","Th"];
// const v1 = arr[0];
// const v2 = arr[1];
// const v3 = arr[2];
// const v4 = arr[3];
// const v5 = arr[4];

// console.table([v1, v2, v3, v4, v5]);

// const [v1, v2, v3] = arr;
// console.log(v1, v2, v3);


// 6) for-in loop: It is use to iterate over js objects

// let student = {
//     user: {
//         name: "Rohit"
//     },
//     age: 35,
//     "is Logged In": true,
//     score: 103
// }

// console.log(student);
// console.log(student.age); 
// console.log(student["age"]);

// for (let key in student) {
//     console.log(key, student[key]);
// }

// console.log(student.user.name);
// console.log(student["user"]["name"]);

// console.log(student["is Logged In"]);

// Note: We can;t iterate over maps using for-in loop
// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("Ch", "China");
// map.set("Fr", "France123");
// console.log(map);

// for(const key in map) {
//     console.log(key);
// }

// console.log(typeof map);


// Question: Print first 50 odd numbers

// for(let i=0; i<=100; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

// Question: Create a game where user can start with any number.
// User has to keep on guessing the number until user enters correct number.

// let guessNumber = 10;
// let userNumber = prompt("Enter a number");

// while(userNumber != guessNumber) {
//     userNumber = prompt("You entered wrong number. Guess again");
// }

// console.log("You guessed right number");

// Question: For the marks list find the max and min marks for students also find the mean.
let marks = [20, 30, 40, 50, 60, 70];

let max = marks[0];
let min = marks[0];
let sum = 0;

for(let i=1; i<marks.length; i++) {
    sum += marks[i];
    if(marks[i] > max) {
        max = marks[i];
    }
    if(marks[i] < min) {
        min = marks[i];
    }
}
console.log(max);
console.log(min);
let mean = sum / marks.length;
console.log(mean);