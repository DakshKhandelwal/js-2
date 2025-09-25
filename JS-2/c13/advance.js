// Synchronous JS And Asynchronous JS 

// console.log("one");
// console.log("two");
// console.log("three");

// Sync in JS 
// Synchronous: The code runs in a particular sequence of instructions
// given in the program. Each instruction waits for the previous 
// instruction to be executed.

// Asynchronous 
// Due to synchronous programming, some important instructions
// gets blocked due previous instruction, which caused delay
// in UI.
// Asynchronous code execution allows to execute the instructions
// without blocking the the flow. 

// console.log("10");
// console.log("11");

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000); //execute hello function after 2 seconds

// console.log("one");
// console.log("two");


// console.log("1");

// setTimeout(()=> {
//     console.log("Hello world");
// }, 0)

// console.log("2");
// console.log("3");

// for(let i=0; i<200; i++) {
//     console.log("Hello", i);
// }

// console.log("4");

// --------------------------------------------------------------

// Callbacks
// A callback is a function that is passed as an argument to another function

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, (x,y) => {
//     console.log(x+y);
// })

// const hello = () => {
//     console.log("Hello");
// }

// setTimeout(hello, 2000);

// -----------------------------------------------------------------

// Callback hell 

// Callback hell: Nested callbacks stacked below one another forming a pyramid structure

// if(15 > 12) {
//     if( 20 > 30) {
//         console.log("true")
//     }
//     else {
//         console.log("false");
//     }
// }

// for(let i=0; i<100; i++) {
//     for(let j=0; j<i; j++) {
//         console.log(i, j);
//     } 
// }

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 4000)
// }

// getData(1); //Objective: this line should wait for result (4 sec) and then go to next line
// getData(2);
// getData(3);


// data 1
// data 2
// data 3

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 4000)
// }

// console.log("getting data 1...");

// getData(1, () => {
//     console.log("getting data 2...");
   
//     getData(2, () => {
//         console.log("getting data 3...");

//         getData(3, () => {
//             console.log("getting data 4...");

//             getData(4);
//         });
//     })
// })

// This style of programming is very difficult to understand, manage and debug.

// ----------------------------------------------------------------------------------------

// Promises: It is for eventual completion of a task. It is a js object.
// It is solution to callback hell.

// let promise = new Promise ((resolve, reject) => {
//     console.log("this is a promise");
//     console.log(resolve);
//     console.log(reject);
//     // resolve("success123");
//     // reject("error123");
// })

// console.log(promise);

//resolve and reject are 2 function handlers provided by JS. 
// They are callback functions.

// 3 states in promise 
// 1) pending: result is undefined
// 2) fulfilled (resolve): The result is the value sent in resolve.  //resolve(data)
// 3) rejected (reject): The result is the error. //resject("error")


//Promise Handling in JS
// .then() -> if promise is fulfilled
// .catch() -> if promise is rejected

// Promise.then((res) => {
//     console.log(res);
// })

// Promise.catch((err) => {
//     console.log(err);
// })


// const getPromise = () => {
//     return new Promise ((res, rej) => {
//         console.log("This is a promise");
//         res("success123");
//         // rej("error 123");
//     })
// }

// let promise = getPromise(); // API call that returns a promise
// console.log(promise);

// promise.then((result) => {
//     console.log("Promise is fulfilled", result);
// })

// promise.catch((err) => {
//     console.log("Promise was rejected", err);
// })


// function asyncFunction() {
//     return new Promise (( resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data");
//             // resolve({success: 1, data: "successful"})
//             reject({success: 0, data: "error in getting data"})
//         }, 4000)
//     })
// }

// console.log("Calling api");

// let apiCallPromise = asyncFunction(); //this API will retun data fter 3 seconds

// console.log(apiCallPromise);

// apiCallPromise.then((res) => {
//     console.log("This is api result", res);
//     console.log(apiCallPromise);
// })

// apiCallPromise.catch((err) => {
//     console.log("Error in api call", err);
//     console.log(apiCallPromise);
// })

// asyncFunction().then((res)=> {
//     console.log(res);
// })

// console.log("Calling api again...");

// asyncFunction().then((res) => {
//     console.log(res);
// })


function getData(dataId) {
    return new Promise (( resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject({success: 0, data: "error in getting data"})
        }, 3000)
    })
}

// console.log("getting data 1...");

// getData(1).then(() => {
//     console.log("getting data 2...");

//     getData(2).then(() => {
//         console.log("getting data 3...");

//         getData(3).then(() => {
//             console.log("getting data 4...");
//             getData(4);
//         })
//     })
// })

//Promise Chaining

getData(1).then((res) => {
            console.log(res);
            return getData(2);
          })
          .then((res) => {
            console.log(res);
            return getData(3);
          })
          .then((res) => {
            console.log(res);
          })


// ----------------------------------------------------------------------------

// async-await 

