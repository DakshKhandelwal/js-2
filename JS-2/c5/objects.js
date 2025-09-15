const emptyObj = {};
// console.log(emptyObj);

const obj = {
    user: "Virat",
    score: 104
}

// console.log(obj);
// console.log(typeof obj);
// console.log(obj.user);
// console.log(obj.score);

// console.log(Object.keys(obj)); //array of keys
// console.log(Object.values(obj)); //array of values

// console.log(Object.keys(emptyObj)); //[]

// if(emptyObj) { //{} => truthy value
//     console.log("Object not is empty");
// }
// else {
//     console.log("Object is empty");
// }

// if(Object.keys(emptyObj).length !== 0) { //{} => truthy value
//     console.log("Object not is empty");
// }
// else {
//     console.log("Object is empty");
// }

// const myObj = {
//     name: "Virat",
//     "full Name": "Virat Kohli",
//     age: 37,
//     isLoggedIn: false,
//     loginDays: ["Monday", "Friday"],
//     score: {
//         testMatch: 105,
//         ipl: 94
//     }
// }

// console.log(myObj);
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(myObj.loginDays[1]);
// console.log(myObj["name"]);
// console.log(myObj["full Name"]);
// console.log(myObj.score.ipl);
// console.log(myObj["score"]["ipl"]);

// Object.freeze(myObj);

// myObj.age = 25;

// console.log(myObj);

//Insert key value in Obj
// myObj.email = "abcd@gmail.com";
// console.log(myObj);

// myObj.greeting = function () {
//     console.log("Happy Engineers Day!!")
// }

// console.log(myObj);
// myObj.greeting();

//Delete keys in Obj
// delete myObj.loginDays;

// delete myObj.age;
// console.log(myObj);

// const user = {};
// user.id = 123;
// user.name = "Vishal";
// user.isLoggedIn = true;
// console.log(user);

// const obj1 = {1: "first", 2: "second"};
// const obj2 = {3: "third", 4: "fourth"};
// console.log(obj1);
// console.log(obj2);

// obj2.obj1 = obj1;
// console.log(obj2);

// const obj3 = {...obj1, ...obj2}; //spread operator to create a shallow copy
// // console.log(obj3);

// obj3["3"] = "third Modified";
// console.log(obj3);

// console.log(obj1);
// console.log(obj2);

// const user = [
//     {
//         id: 1,
//         email: "abcd@gmail.com"
//     },
//     {
//         id: 2,
//         email: "random@gmail.com"
//     }
// ]

// // console.log(user[1].email);

// for(let i=0; i<user.length; i++) {
//     let obj = user[i];
//     console.log(obj.email);
// }

// const user2 = {
//     months: ["Jan", "Feb", "March"],
//     days: ["Sun", "Mon", "Tue"]
// }

// console.log(user2.months);

// Shallow copy and Deep copy 

const obj1 = {
    id1: 123,
    count1: 2,
    userName1: {
        first1: "Rohit",
        last1: "Sharma"
    }
}

const obj2 = {
    id2: 234,
    count2: 4,
    userName2: {
        first2: "Virat",
        last2: "Kohli"
    }
}

// const obj3 = {...obj1, ...obj2}; //spread operator (Shallow copy)
// console.log(obj3);

// obj3.userName1.first1 = "RohitModified";
// obj3.count1 = 102;

// console.log(obj3);

// console.log(obj1);

//Deep Copy 
const obj3 = JSON.parse(JSON.stringify({...obj1, ...obj2}));
// console.log(obj3);
obj3.userName1.first1 = "RohitModified";

console.log(obj3);

console.log(obj1);