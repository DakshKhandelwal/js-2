// let isLoggedIn = undefined;
// console.log(typeof isLoggedIn);

// let valueInNumber = Number(isLoggedIn);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

//"23" -> 23
// "23Rahul" -> NaN (Not a Number)
// true -> 1
// false -> 0
// "true" -> NaN
// null -> 0
// undefined -> NaN 

// let address = true;
// console.log(typeof address);

// console.log(String(address));
// console.log(typeof String(address));

// true -> "true" 
// 23 -> "23" 
// null -> "null" 
// undefined -> "undefined" 

// let score = 1;
// console.log(typeof score);

// console.log(Boolean(score));
// console.log(typeof Boolean(score));

// 0 -> false
// "" -> false 
// null -> false 
// undefined -> false
// 1 -> true
// "Rahul" -> true 

// let value = 4;
// let negValue = -value;
// console.log(negValue);
// console.log(typeof negValue);

// let str1 = "23";
// let str2 = "20";

// let str3 = str1 - str2; //NaN - NaN 
// console.log(str3);
// console.log(typeof str3);

// let str4 = str1 + str2;
// console.log(str4);
// console.log(typeof str4);

let value1 = "1" + 2; // "1" + "2" => "12"
// console.log(value1);
// console.log(typeof value1);

let value2 = 1 + "2"; //"1" + "2" => "12"
// console.log(value2);
// console.log(typeof value2);

// let value3 = 1 + 1 + "2"; //"2" + "2" => "22"
// console.log(value3);
// console.log(typeof value3);

// let value4 = 1 + 1 + "2" + 1 + 1; //"2" + "2" => "22" + "1" + 1  => "221" + 1 => "2211"
// console.log(value4);
// console.log(typeof value4);

// console.log(((3 + 4) * 5) / 10);

// let v1 = +"23";
// console.log(v1);
// console.log(typeof v1);

// let num1, num2 = 3, num3;

// num1 = num2 = num3 = 2 + 3;

// console.table([num1, num2, num3]);

// console.log("2" > 1); //true
// console.log("02" > 1); //true

// console.log(NaN > 0); //false
// console.log(NaN >= 0); //false
// console.log(NaN < 0); //false

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null < 0); //false
// console.log(null >= 0); //true (edge case)

// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined < 0); //false
// console.log(undefined >= 0); //false 

// console.log("2" !== 2); //true

// console.log("2" === 2); //false (compare both value and type)

// let arr1 = ["superman", "batman"];
// let arr2 = ["superman", "batman"];

// console.log(arr1 == arr2); //false


let num = 100;
console.log(num++); //100
console.log(++num); //102
