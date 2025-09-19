//Question: Extract first word

// function firstWord (str) {
//     let trimStr = str.trim();
//     let words = trimStr.split(" ");
//     return words[0];
// }

// console.log(firstWord(""));

// Question: Chunk String 
function chunkStr(str, size) {
    let chunks = [];
    for(let i=0; i<str.length; i = i + size) {
        let subStr = str.slice(i, i+size);
        // console.log(subStr);
        chunks.push(subStr);
    }

    return chunks;
}

// console.log(chunkStr("Rahul Dravid", 3));
// console.log(chunkStr("Hello, world!", 5)) // ["Hello", ", wor", "ld!"]
// console.log(chunkStr("12345", 2));
// console.log(chunkStr("abc", 5));

// Question: Roman Numeral

const symbol = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]

let num = 0;  // 10 + 5 + 1 + 1 + 1 = XVIII
//700 + 98
//500 + 100 + 100 + 90 + 5 + 1 + 1 + 1
//DCCXCVIII

let result = "";

symbol.forEach ((item) => {
    // let val1 = item[0];
    // let val2 = item[1];
    // console.log(val1, val2);
    const [key, val] = item; //destructuring of array
    // console.log(key, val);

    while(num >= val) {
        num -= val;
        result += key;
    }
})

console.log(result);