// Arrays: for, while, do-while, for-of
//forEach loop
// arr.forEach(callback function) 

// Callback function: A function is passed as an argument to another function/method

// let arr = [1, 2, 3, 4];

// arr.push(5);

// arr.forEach(function(val) {
//     console.log(val);
// })

// let newArray = ["Pune", "Mumbai", "Delhi"];

// newArray.forEach(function (city) {
//     console.log(city);
// })

// newArray.forEach((city) => console.log(city));

// forEach is a Higher order Function (HOF)

let num = [1, 2, 3, 4];

let calculateSquare = function (num, index, arr) {
    console.log(num, index, arr);
    console.log(num* num)
}

num.forEach(calculateSquare);