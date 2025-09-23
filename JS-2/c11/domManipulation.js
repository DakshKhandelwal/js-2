// CRUD Operations for DOM Manipulation (Create, Read, Update, Delete)

// Read   => Query Selection (querySelector(), getElementById(), etc.)
// Update => Element properties (innerText, innerHTML, textContent, tagName)

// Insert and Delete elements in the DOM using js

// let ele = document.createElement("div");

// Ways to insert the element in DOM tree 

// 1) node.append(ele): It adds the element at the end of the node (inside the node)

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!"
// console.log(newBtn);
// console.log(newBtn.innerHTML);
// console.log(newBtn.innerText);
// console.log(newBtn.tagName);

// let div = document.querySelector("div");
// console.log(div);

// div.append(newBtn);

// 2) node.prepend(ele): Adds element at the start of the node (inside the node)

// div.prepend(newBtn);

// 3) node.before(ele): Adds element before the node (outside)

// div.before(newBtn);

// 4) node.after(ele): Adds element after the node (outside)

// div.after(newBtn);

// ---------------------------------------------------------------------------

// Delete Elements 

// node.remove() // removes that node from the DOM

// let div = document.querySelector("div");

// div.remove();

// let newHeading = document.createElement("h1");
// // console.log(newHeading);

// newHeading.innerHTML = "<i> <u> Hello JS </u> </i>";

// // let h1 = document.querySelector("h1");
// // console.log(h1);

// // h1.before(newHeading);
// document.querySelector("body").prepend(newHeading);

// document.querySelector("p").remove();

// newHeading.remove();


// Question: Create a <p> tag in HTML file and give it a class.
// Now create a new class in CSS and try to append this new class
// to the <p> tag.

let p = document.querySelector(".myPara");

// p.setAttribute("class", "newClass");

p.classList.add("newClass");