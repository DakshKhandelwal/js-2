// let canvas = document.querySelector(".canvas");
// console.log(canvas);

let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        console.dir(e.target);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
})
