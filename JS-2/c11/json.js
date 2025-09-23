// JSON (Javascript Object Notation)

// JSON is a plain text for storing and tranporting the data 
// JSON is used to send, receive and store data

let myObj = {
    name: "Virat",
    age: 23
}

// console.log(myObj);

let jsonString = '{"name": "Virat", "age": 23}'

// console.log(jsonString);

// To convert JSON string into JS obj we can use
// JSON.parse()

// console.log(JSON.parse(jsonString));

// To convert JS obj into JSON string 
// JSON.stringify() 

// console.log(JSON.stringify(myObj));
// console.log(myObj);

// console.log(JSON.parse(jsonString).name);
// console.log(JSON.parse(jsonString).age);

let jsonString2 = '{"employee":[{"firstName":"Virat","lastName":"Kohli"},{"firstName":"Rohit","lastName":"Sharma"}]}'

let jsObj2 = JSON.parse(jsonString2);

console.log(jsObj2);
console.log(jsObj2.employee[0].firstName);

