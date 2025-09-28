// Local Storage, Session Storage, Cookies 

// Local Storage: It can store upto 5MB data. Data is stored in the browser,
// even if you refresh your page or if we close the tab or browser.

// console.log(localStorage);

// //Create
// localStorage.setItem("username", "john wick");
// localStorage.setItem("car", "bmw");

// //Read
// console.log(localStorage.getItem("username"));

// localStorage.setItem("hello", "javascript");

// //Update
// localStorage.setItem("username", "john cena");

// //Delete
// localStorage.removeItem("hello");

// localStorage.clear();

// const user = { isLoggedIn: false };
// // localStorage.setItem("loginDetails", user); //user is not a string 
// // console.log(localStorage.getItem("loginDetails")); //[object Object]

// localStorage.setItem("loginDetails", JSON.stringify(user)); //converted object to string
// let userDetails = localStorage.getItem("loginDetails");

// console.log(JSON.parse(userDetails)); //we are converting string back to an object
// console.log(JSON.parse(userDetails).isLoggedIn); 


// Session Storage: It also stores data upto 5MB. It stores data for a particular session/tab.
// If you close the tab or change the tab data is lost.

// sessionStorage.setItem("animal", "tiger");
// sessionStorage.setItem("sport", "cricket");
// console.log(sessionStorage.getItem("animal"));
// sessionStorage.removeItem("sport");
// sessionStorage.clear();


// Cookies: It can store upto 4KB of data.

// document.cookie = "key=value; expires='time'";
// document.cookie = "username=johnwick12345";
// document.cookie = "username=johnwick007; expires='Fri, 31 Dec 2014 23:59:59 GMT;'"
// document.cookie = "username=johnwick007; expires='31 Dec 2024 23:59:59 GMT;'"

// Same Origin 
// 1) Protocol/Scheme (http/https)
// 2) host/domain (flipkart.com/localhost)
// 3) port (8080/3000)