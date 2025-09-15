// const count = 100;
// console.log(count);

// const balance = 100.236567;
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(typeof balance.toFixed(2)); //string

// console.log(Number(balance.toFixed(2)));
// console.log(typeof Number(balance.toFixed(2)));

// console.log(balance.toString());
// console.log(typeof balance.toString()); //string

// console.log(balance.toString().length);

// let newNumber = 1000000000;
// console.log(newNumber.toLocaleString());
// console.log(
//   newNumber.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
// );

// -----------------------------------------------------------

// Math 
// console.log(Math);
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.64999));

// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.9999)); //4

// console.log(Math.min(4, 3, 32, 45, 67, -2, 100)); //-2
// console.log(Math.max(4, 3, 32, 45, 67, -2, 100)); //100

// console.log(Math.random()); //[0,1) => 0 is includes and 1 is included

const min = 10;
const max = 20;
//min and max = [10, 20]

// console.log(Math.random()); // 0 to 1 not equal to 1
// console.log(Math.random() * 10); // 0 to 10 not equal to 10
// console.log(Math.floor(Math.random() * 10)); // it will only include integer values b/w 0 to 10 not equal to 10
// console.log(Math.floor(Math.random() * 10) + 1); // only include integer values b/w 1 to 10  (equal to 10)

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // only include integer values b/w min and max and both are included
