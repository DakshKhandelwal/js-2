"use strict"

// Arrays 
// let marks = [45, 55, 67, 89, 94, 93, 97] //0 based index
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[marks.length - 1]);
// console.log(marks[30]);
// console.log(marks[-2]);
// console.log(typeof marks);

// for(let i=0; i<marks.length; i++) {
//     console.log(marks[i]);
// }

// for-of 
// for(let ele of marks) {
//     console.log(ele);
// }

// const strArr = Array("Hello", "World", "Array");
// console.log(strArr);

//Properties and methods of array
// console.log(strArr.length);

// Methods in Array 
// 1) Mutating Methods (modify the original array)

// strArr.push("Strings", "Objects", "Numbers"); //O(1) (It adds element to the end)
// console.log(strArr);

// strArr.pop(); //O(1) (It removes the last element)
// console.log(strArr);

// strArr.unshift("New Datatype", "MyData"); //O(n) (It adds element at the start)
// console.log(strArr);

// strArr.shift();  //O(n) (It removes the first element)
// console.log(strArr);


// const strArr = ["March", "Jan", "Feb", "Dec"];
// console.log(strArr);
// strArr.sort();
// console.log(strArr);

// const newArr = [0, 4, 6, 10, 3, 1, 2, 100, -200, 400, 0, -8, 5];
// console.log("Original array before sort", newArr);
// // newArr.sort();
// // console.log("Modified array after sort", newArr); //For numbers it might give wrong solution

// newArr.sort(function (a, b) {
//     return a - b;
// })

// console.log("Modified array after sort", newArr);


// 2) Non-mutating methods (return a new array)

// const newArr = [0, 1, 2, 3, 4, 5];
// const myArr = newArr.slice(1, 3) // [1, 2] => [1,2]
// console.log("Original array", newArr);
// console.log("Modified array",myArr);

// console.log(myArr.slice(-2, -1));

// console.log(myArr.slice(3, 1));
// In slice method if we pass neg index it start to count from end starting -1, -2 in reverse.
// -5 -4,-3,-2, -1  //index for -ve numbers
// [6, 7, 8, 9, 10]
//  0, 1, 2, 3, 4  //index for +ve numbers

// const myArr = ["Ram", "Shyam", "Dhyanshyam", "Balram"];
// console.log(myArr);

// const mergedArray = newArr.concat(myArr);
// console.log(mergedArray);

// console.log(newArr);

// splice method
// const newArr = [0, 1, 2, 3, 4, 5];
// console.log("Original array before splice", newArr);

// const myArr = newArr.splice(-4, -2); //remove elements starting from index 1 
// console.log("Array after splice",myArr);
// console.log("Original array after splice",newArr);

// 3) ES2023 immutable methods: These are newer non-mutative alternative to older mutative methods

// const strArr = ["March", "Jan", "Feb", "Dec"];
// console.log(strArr);
// const newArr = strArr.toSorted();
// console.log(newArr);
// console.log(strArr);

// toReversed();
// toSplice()

// 4) Search methods (retur a value not array)

// const strArr = ["March", "Jan", "Feb", "Dec"];
// console.log(strArr);
// const index = strArr.indexOf("jan");
// console.log(index);

// const isValue = strArr.includes("Feb");
// console.log(isValue);

//find()

// 5) Iterative methods (do not return a new array)

// forEach()
// map()
// filter()
// reduce() 

// Some examples 
// flat()

// const randomArray = [1, 2, [3, 4, 5,], 6, [7, 8], 9, [4, 5, [11, 12]]];
// // const newArr = randomArray.flat(2);
// const newArr = randomArray.flat(Infinity);
// console.log(newArr);

// const heroes = ["thor", "batman", "hulk"];
// const indianHeroes = ["shatkiman", "krrish"];
// const comicHeroes = ["spiderman", "superman"];

// we can use concat to merge only 2 arrays
// spread operator (...)
// const allHeroes = [...heroes, ...indianHeroes, ...comicHeroes];
// console.log(allHeroes);

const newArr = ["Ram", "Shyam"];
console.log(Array.isArray(newArr));
console.log(Array.from("Vinay Kumar")); //arary of characters
console.log(Array.from({name: "Yogesh"})); []
console.log(Array.of(100, 200, 300));
