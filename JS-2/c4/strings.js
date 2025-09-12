// Strings 
// let str1 = "Javascript";
// let str2 = 'Javascript';
// // console.log(str1, str2);

// let str3 = String("myString");
// console.log(str3);

// console.log(str3[0]);
// console.log(str3[1]);
// console.log(str3[str3.length -1]);


// Properties and methods for strings 
//Strings are immutable in JS (all methods will return a new string or a value will never
// modify original string)

let str4 = "Sarada/Panigrahy";
//string property
// console.log(str4.length); 
// console.log(str4);

//String Methods
// console.log(str4.trim());
// console.log(str4.charAt(1)); //returns value at that index
// console.log(str4.charCodeAt(1)); // returns ascii code for that char
// console.log(str4.indexOf('z')); // returns first matching char and if not matching returns -1
// console.log(str4.slice(1, 3)); //[1, 2] returns the removed string
// console.log(str4.split("/")); //returns an array based on split value
// console.log(str4.substring(-2, 5)); //returns string based on start and end index
// console.log(str4.toLowerCase());
// console.log(str4.toUpperCase());

// Template Literals in JS
// String Interpolation 
let str5 = `This is a string interpolation ${str4}`;
// console.log(str5);

let newString = `This is a template literal ${1+2+3}`;
// console.log(newString);
// console.log(typeof newString);

//Escape characters (\n, \t)
let str6 = "Sarada\tPanigrahy";
console.log(str6);
console.log(str6.length); //\n or \t -> counted as length 1