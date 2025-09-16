//Array methods 
// 1) Map 
// Creates a new array with results of some operation.

// let arr = [1, 2, 3, 4, 5, 6];

// let newArr = arr.map(function(val, index, completeArray) {
//     console.log(val, index, completeArray);
//     return val*2;
// })

// console.log(newArr);

// 2) Filter 
//Create a new array of elements based on the condition

// let newArr = arr.filter((val, index, completeArray) => {
//     return val % 2 !== 0
// })
// console.log(newArr);

// 3) Reduce 
// Performs some operations and reduce the array to a single value. It returns that value

// let arr = [1, 2, 3, 4];

// let sum = arr.reduce( function (prev, curr) {
//     return prev + curr;
// })

// console.log(sum);

// let arr = [46, 26, 34, 91, 98, 73, 27];

// let max = arr.reduce((prev, curr) => {
//     return prev > curr ? prev: curr;
// })

// console.log(max);
// console.log(arr);

// Question: Find out marks of the students which are 90+

// let marks = [46, 35, 56, 96, 92, 21];

// const filteredArray = marks.filter((val) => {
//     return val > 90;
// })

// console.log(filteredArray);

// Chaining the methods => Method chaining 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = arr.filter((val) => val%2 === 0)
//                   .map((val) => val * 10)
//                   .filter((val) => val > 50)
//                   .reduce((prev, curr) => prev + curr);

// console.log(result);

// Question: Take a number n input from the user. Create an array from 1 to n. 
// Then use reduce method to calulate sum of all numbers in the array.
// Then calculate product of all numbers in the array.

// let n = prompt("Enter a number");
let n = 4;

let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
})

// console.log(sum);

let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
})

console.log(factorial);