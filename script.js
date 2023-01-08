// // //Arrays

// // var ourArray = ["John", 23]
// // var  myArray = ["Ibrahim",21];

// // /*
// // Nested Array or Multiline arrays these refres to when you an array inside of an array
// // */

// // let nestedArray = [["The Universe", 23], ["The Multiverse", 10101]]

// // console.log("Learning node")
// // console.log("I want to be a mastercraftman in javascript")
// /* Variables are used to store information; information can be cost of an item; The name of the user or any
// data that can be writting in code
// */

// /* Data Types: Baically Specifies what kind of data can be stored and manipulated; within a program, In javaScript
// data types can be categorized into primitive and non primitive data types;
// Primitive Types:
// -String type, etc */

// const isEven = 10 % 2 == 0 ? true: false
// console.log(isEven);
// /* Type Conversions: In Javascript there are two types of type conversion; Implicit conversion also known as
// type coercion wherr javascript itself will automatically convert the type,
// Explicit Conversion: Where You manually convert the type */

// console.log('15' - '5')
// console.log(parseFloat('3.14'))
// console.log(String(300))
// console.log(Boolean(10))

// const var1 = 'test'
// const var2 = 'test'

// console.log(var1 == var2)
// console.log(var1 === var2)

// /* Conditional Statements are used to perdorm different actions from different conditions */

// const num = 5

// if (num > 0) {
//     console.log('Number is positive')
// }else if {
//     console.log('Number is not positive')
// } else{

// // }
// const numOne = 16
// if (numOne > 0) {
//     console.log('Number is positive')
// } else if (numOne < 0 ){
//     console.log('Number is negative')
// }else {
//     console.log('number is zero')
// }
// const color =  red
// switch (key) {
//     case red:
//         console.log('color is red')
//         break;

//         case blue:
//         console.log('color is blue')
//         break;

//         case green:
//         console.log('color is green')
//         break;
//     default:
//         console.log('Not a Valid color');
// }

/* Loop; In programming - Loops are used to repeat blocks of code
for loop
while loop
Do while loop
for of loop */

// for(let i = 1; i<= 5; i++) {
//     console.log('iteration number ' + i)
// }

// let i = 1
// while(i <= 5){
//     console.log('iteration Number' + 1)
//     i++
// }
/* The do while loop is always executed atleast once*/
// let i = 1
// do {
//     // console.log('iteration Number' + 1)
// } while (i <= 5);

// /* for of loop;
// for of loop is used to loop over collection of data */

// const numArray = [1,2,3,4,5]
// for (const num of numArray){
//     console.log('iteration number'+ num)
// }
/* Functions are fundamental building blocks in jabvascript; A javascript function is a 
block of code designed to perform a particular task-  example; Add two numbers, multiply two numbers etc.

functions can be reusable as it can be defined once and can be called with different results.

functions help divide a complex problem into smaller chuncks and make your program easy to understand and maintain
*/

function greet(username) {
    console.log('Good Morning' + username)
}
greet('bruece')
greet('Clark')
greet('Diana')

function add(a, b) {
    return a + b
}

const arrowSum = (a,b) =>{
    return a + b
}

const sum = arrowSum(25, 25)
console.log(sum)

if(true) {
    const myName = 'Ibrahim'
}
console.log(myName)

/* Scope: scope basically determines the accesibility of visibilities of variables : JavaScript has three types of 
scope
1.Block scope: Blockscope dictates that variables declared inside a pair of curly braces cannot be accesed outside the
block
2.Function scope
3.Global Scope
*/
//Block Scope
// if(true){
//     const my_surn_name = "Umar"
// }

// console.log(my_surn_name)

if (true){
    const myVariable = "Umar"
}
console.log(myVariable)

function testFn() {
    const myName = 'SpiderMan'
}
console.log(myName)