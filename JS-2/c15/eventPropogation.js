// Event Propogation 

// document.querySelector("#grandParent").addEventListener("click", () => {
//     console.log("grandparent clicked");
// }, true);

// // isCapture -> true (Capturing)
// // isCapture -> false (bubbling) by default

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
// }, false);

// document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
// }, false);

// First event capturing takes place and then event bubbling 

// Stop Propogation 

// document.querySelector("#grandParent").addEventListener("click", (e) => {
//     console.log("grandparent clicked");
//     e.stopPropagation();
// }, false);

// document.querySelector("#parent").addEventListener("click", (e) => {
//     console.log("parent clicked");
//     e.stopPropagation();
// }, false);

// document.querySelector("#child").addEventListener("click", (e) => {
//     console.log("child clicked");
//     // e.stopPropagation();
// }, true);


//Event Delegation: Due to event bubbling (by default) we are able to access
// child elements in the parent which reduces the need for child elements

// document.getElementById("laptops").addEventListener("click", () => {

// })

// document.getElementById("watches").addEventListener("click", () => {
    
// })

// document.getElementById("books").addEventListener("click", () => {
    
// })

// document.getElementById("mobiles").addEventListener("click", () => {
    
// })

document.getElementById("categories").addEventListener("click", (e) => {
    console.log("categories clicked");
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.id);
    window.location.href = "/" + e.target.id;
})
