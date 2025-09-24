let clock = document.querySelector("#clock");

let date = new Date();
clock.innerHTML = date.toLocaleTimeString();

// setTimeout(function, time in milliseconds) 
console.log("Hello JS");

// setTimeout(() => {
//     console.log("Hello world");
//     //code will be executed aftewr 3000 milli seconds
// }, 3000);

// 3000 ms = 3 sec 

// setInterval (() => {
//     //code will execute after every 1 second
// }, 1000)

// 1000 ms = 1 sec 

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    console.log("Hello world", date);
}, 1000);