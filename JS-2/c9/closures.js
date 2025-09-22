// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// // console.log(a); //error
// console.log(z);

// z();

// Closure: It is a function bind together with its lexical enviroment

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// console.log(z);
// z();

function z() {
    var b = 100;
    function x() {
        var a = 200;
        function y() {
            console.log(a, b);
        }
        a = 2000;
        return y;
    }
    b = 1000;
    return x;
}

let p = z();
console.log(p);

let q = p();
console.log(q);

q();