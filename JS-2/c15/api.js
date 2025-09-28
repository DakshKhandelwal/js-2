// API (Application Programming Interface)

// fetch API 
// The fetch API provides an interface for fetching (sending/receiving) data or resource
// It uses Request and Response objects
// fetch() method is used to fetch the data

// fetch API returns a promise

// let promise = await fetch(url, [optional]);

// const url = "https://official-joke-api.appspot.com/random_joke123";

// let data = await fetch(url);

// const getData = async () => {
//     console.log("Calling an api...");
//     let response = await fetch(url);
//     console.log(response);
//     console.log(response.status);
    
//     let data = await response.json(); //return a js object
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
// }

// getData();


// const button = document.querySelector("#myBtn");
// const joke = document.querySelector("#joke");

// // button.addEventListener("click", getData);
// button.addEventListener("click", async () => {
//     console.log("Calling an api...");
//     let response = await fetch(url);
//     console.log(response);
//     console.log(response.status);
    
//     let data = await response.json(); //return a js object
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
//     joke.innerHTML = `<b> Setup </b>: ${data.setup} <br> <b> Punchline </b>: ${data.punchline}`;
// });

// AJAX is Asynchronous JS & XML
// JSON is Javascript Object Notation
// json() method: returns a promise that resolves with the result of 
// parsing of the response body as a JSON

// json() method 
// Input : JSON 
// Output: js object

// JSON data 
// {
//     "type": "general",
//     "setup": "What do you call a careful wolf?",
//     "punchline": "Aware wolf.",
//     "id": 194
// }

// js object 
// const myObj = {
//     type: "general",
//     setup: "What do you call a careful wolf? ",
//     punchline: "Aware wolf.",
//     id: 194
// }

// -------------------------------------------------------------------

// Using promise chain to make API calls 

// function getData() {
//     fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
// }

// Request and Response headers
// HTTP protocol 
// HTTP status codes 


const newAPIurl = "https://randomuser.me/api/";

const button = document.querySelector("#myBtn");
const joke = document.querySelector("#joke");

// button.addEventListener("click", getData);
button.addEventListener("click", async () => {
    console.log("Calling an api...");
    let response = await fetch(newAPIurl);
    console.log(response);
    console.log(response.status);
    
    let data = await response.json(); //return a js object
    console.log(data);
    let result = data.results;
    let email = result[0].email;
    let firstName = result[0].name.first;
    let lastName = result[0].name.last;
    let phoneNumber = result[0].phone;

    console.table([email, firstName, lastName, phoneNumber]);
});
