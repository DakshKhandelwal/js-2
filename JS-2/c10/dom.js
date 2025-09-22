// What is DOM? 
// Document Object Model

// console.log(window);
// console.log(window.document);
// console.log(window.document.head);
// console.log(window.document.body);

// console.log(document);

//We use DOM to do dynamic changes or manipulate out web page

// DOM Manipulation

// Element / Node Selection 

// 1) Selection by id (if not present it will return null)
// let myPara = document.getElementById("myPara");
// console.log(myPara); //element
// console.dir(myPara); //obj

// let button = document.getElementById("myBtn");
// console.log(button);
// console.dir(button);

// 2) Selection by Class (it returns HTML collection as o/p and if not present returns empty html collection)
// let headings = document.getElementsByClassName("my-heading");
// console.log(headings);
// console.dir(headings);

// console.log(headings[0]);
// console.log(headings[1]);

// 3) Selection by tag (it returns HTML collection as o/p and if not present returns empty html collection)
// let pTags = document.getElementsByTagName('p');
// console.log(pTags);
// console.dir(pTags);

// console.log(pTags[0]);
// console.log(pTags[1]);

// Query Selection (# -> ids, . -> class)
// 1) document.querySelector("#myPara");
// let pTag = document.querySelector("#myPara"); //selection by id
// console.log(pTag);

// document.querySelector(".my-heading");
// let myHeadings = document.querySelector(".my-heading"); //(selection by class) returns first matching element
// console.log(myHeadings);

// 2) document.querySelectorAll("my-heading");
// let allHeadings = document.querySelectorAll(".my-heading"); //(selection by class) returns all matching elements in a node list
// console.log(allHeadings);

// console.log(allHeadings[0]);
// console.log(allHeadings[1]);

// let myButton = document.querySelector("button"); //selection by element
// console.log(myButton);


// ---------------------------------------------------------------------------------------------

// Properties 

// 1) tagName: returns a tag for that element

let firstPara = document.querySelector("p");
// console.log(firstPara);
// console.dir(firstPara);

// console.log(firstPara.tagName); //P

let firstButton = document.querySelector("button");
// console.log(firstButton);
// console.dir(firstButton);

// console.log(firstButton.tagName); //button

// 2) innerText: returns the text content of the element and all its children

// let div = document.querySelector("div");
// console.log(div);
// console.dir(div);
// console.log(div.tagName);

// console.log(div.innerText);
// div.innerText = "Random text changed from JS";
// console.log(div.innerText);

// let button = document.querySelector("button");
// console.log(button);

// button.innerText = "Changed Text for button";

// 3) innerHTML: returns the plain text or HTML content in that element and all of its children

// let div = document.querySelector("div");

// console.log(div.innerHTML);
// console.log(div.innerText);

// 4) textContent: returns the text content even for the hidden elements

// let div = document.querySelector("div");

// console.log(div.innerHTML);
// console.log(div.innerText);
// console.log(div.textContent);

// Question: We have a heading elements in our html file with text as "Hello Javascript".
//Append "from Accio" to this string using JS

// let heading = document.querySelector("h1");
// console.log(heading);

// heading.innerText = heading.innerText + " from Accio"; //string concatenation

// Question: Create 3 div elements all with common class name box.
// Access them and add some unique text to each of these 3 divs.

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// divs[0].innerText = "Unique div 1";
// divs[1].innerText = "Unique div 2";
// divs[2].innerText = "Unique div 3";

// let index = 1;
// for(let div of divs) {
//     div.innerText = `Unique div ${index}`;
//     index++;
// }

// divs.forEach((div, index) => {
//     div.innerText = `Unique div ${index+1}`;
// })

// -------------------------------------------------------------------------

// Attributes 
// 1) getAttribute(attr)
// let h1 = document.querySelector("h1");
// console.log(h1);

// let id = h1.getAttribute("id");
// console.log(id);

// let name = document.querySelector("h1").getAttribute("name");
// console.log(name);

// 2) setAttribute (attr, value)
// let firstDiv = document.querySelector("div");

// firstDiv.setAttribute("id", "newDiv1234");

// firstDiv.classList.add("newClass");
// firstDiv.classList.remove("box");

// -------------------------------------------------------------------------------

// Manipulate CSS using JS 

//Styles
// element.style.backgroundColor

// CSS => JS in camel case
// color => color 
// background-color => backgroundColor
// font-size => fontSize 

let body = document.querySelector("body");
body.style.backgroundColor = "red";

let heading = document.querySelector("h1").style.fontFamily = "cursive";
let heading2 = document.querySelector("h1").style.fontSize = "50px";
let heading3 = document.querySelector("h1").style.visibility = "hidden";
