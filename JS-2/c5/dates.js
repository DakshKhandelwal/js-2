let date = new Date();
console.log(date);
// console.log(typeof date); //object
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.getDay()); //Sunday -> 0, Monday -> 1
// console.log(date.getMonth()); // 0 based index Jan -> 0
// console.log(date.getFullYear()); // 0 based index Jan -> 0

// let myDate = new Date("09-32-2025"); //MM-DD-YYYY
// console.log(myDate); //Invalid Date

const start = Date.now();
//long code taking some time to execute
console.log(`Time elapsed: ${Date.now() - start} ms`);