// Events 
// The change in the state of an object is called as events 
// Events are fired to notify code of "interesting changes" that may affect the code

// Mouse Events (click, double click)
// KeyBoard events (keypress, keyup, keydown)
// Form events (submit etc)

//Inline event handling

// ondblclick = "console.log('This is a double click event')"

// Event Handling in JS 

// node.event = () => {

// }

// let btn = document.querySelector("button");

// btn.onclick = (e) => {
//     console.log("Button clicked!!")
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// }

// btn.onclick = () => {
//     console.log("Second event");
// }

// btn.onclick = () => {
//     console.log("Third event");
// }

//Note: If we have 2 evnts with same name js will keep the last event
//Note: If we have inline events and js events only js event will be executed
// (html event will not be executed)

// btn.ondblclick = () => {
//     console.log("Double click")
// }

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("Inside the div");
// }

// div.onmouseleave = () => {
//     console.log("on mouse leave");
// }

// Event Object 
// It is a special object which has details about the event 

// node.event = (e) => {
    // console.log(e);
// // }

// Event Listeners
// node.addEventListener(event, callback) 

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// })

// btn.addEventListener("click", () => {
//     console.log("Second event handler");
// })

// const handler3 = () => {
//     console.log("Third event handler");
// }

// btn.addEventListener("click", handler3)

// btn.addEventListener("click", () => {
//     console.log("Fourth event handler");
// })

// // node.removeEventListener(event, callback)

// btn.removeEventListener("click", handler3);


// Question: Create a toggle button that toggles b/w light and dark mode.

let button = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";

button.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.setAttribute("class", "dark");
        // body.classList.add("dark");
        // body.classList.remove("light");
    }
    else {
        currMode = "light";
        body.setAttribute("class", "light");
        // body.classList.add("light");
        // body.classList.remove("dark");
    }
    console.log(currMode);
})