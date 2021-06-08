// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 0, 1, 2, 3, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 0, 1, 2, 3, 4));

/* 2. Rounding
 a. Round up
 Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
 let num1 = 3321.32321;
 console.log(Math.ceil(num1)); */
function roundUp(num){
    let result = Math.ceil(num);
    console.log(result);
}
roundUp(3321.32321);
/* let num2 = 326.76;
console.log(Math.ceil(num2));
let num3 = 76788.7;
console.log(Math.ceil(num3));
let num4 = -9.78;
console.log(Math.ceil(num4));
let num5 = 43.342;
console.log(Math.ceil(num5)); */
function roundUp(num){
    let result = Math.ceil(num);
    console.log(result);
}
roundUp(326.76);
roundUp(76788.7);
roundUp(-9.78);
roundUp(43.342);

//b. Round down
//Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
/* console.log(Math.floor(num1));
console.log(Math.floor(num2));
console.log(Math.floor(num3));
console.log(Math.floor(num4));
console.log(Math.floor(num5)); */
function roundDown(num){
    let result = Math.floor(num);
    console.log(result);
}
roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(43.342);

// Strings and Numbers
/* 1. Concatenation.
Create two variables. One variable should contain a string value and the other should contain a number.
Concatenate the string and the number.
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
Expected Output:
"Hi, my name is Nancy and I am 25"
In this case, what is the + operator doing? Comment your answer in the js file.*/
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
console.log(introSentence + " " + age);
// In this case, the + operator just unites the string, the space and the number.
// Or
// console.log(`${introSentence} ${age}`);

//2. Converting
//Create a variable with the value of “1005”. Convert it to a number.
let str = "1005";
console.log(parseInt(str, 10));
// Or
let newStr = parseInt(str, 10);
console.log(newStr);
//Create a variable with the value of “10.05". Convert it to a number.
let secStr = "10.05";
console.log(parseFloat(secStr));
// Or
let newSecStr = parseFloat(secStr);
console.log(newSecStr);