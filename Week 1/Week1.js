// Week 1 - JavaScript Basics

// Variables are used to store values (literals).
// There are three ways to declare variables in JavaScript: let, const, and var.
// 'var' is rarely used now due to its lack of block scope.

let a = 12;
var b = 20;
const c = 30;

console.log(a, b, c); // Output: 12 20 30

// Variables declared with 'let' and 'var' can be reassigned
a = 30;
b = 12;

// c = 60; // This will cause an error because 'const' variables cannot be reassigned

console.log(a, b, c); // Output: 30 12 30

// -------------------- Functions --------------------

// Basic function without parameters
function add() {
    console.log(a + b); // Expected output: 42
}
add(); // Function call

// Function with parameters
function add2(c, d) {
    console.log(c + d);
}

add2(); // No arguments passed, results in NaN (undefined + undefined)
add2(8, 9); // Output: 17

// -------------------- Variable Scope --------------------

// **Global Scope**
// Variables declared outside a function can be accessed anywhere in the script.

let number1 = 100;
let number2 = 200;

function subtract() {
    console.log(number2 - number1); // Both number1 and number2 are globally declared
}
subtract(); // Output: 100

// **Local Scope**
// Variables declared inside a function are only accessible within that function.

function multiply() {
    let number3 = 100;
    let number4 = 200;
    console.log(number3 * number4); // Output: 20000
}
multiply();

// console.log(number3); // ReferenceError: number3 is not defined
// console.log(number4); // ReferenceError: number4 is not defined

// -------------------- Shadowing in JavaScript --------------------

// Shadowing occurs when a variable declared in a local scope (inside a function or block)
// has the same name as a variable in an outer scope, effectively overriding access 
// to the outer variable within that scope.

function add3() {
    let a = 60; // This 'a' shadows the global 'a'
    console.log(a + b); // Uses local 'a' (60) instead of global 'a' (30)
}

add3(); // Output: 72

// -------------------- Function Scope vs Block Scope --------------------

// Function Scope Example
function enclosing() {
    let letFunc = "A";
    const constFunc = "B";
    var varFunc = "C";
}

// console.log(letFunc);   // ReferenceError: letFunc is not defined
// console.log(constFunc); // ReferenceError: constFunc is not defined
// console.log(varFunc);   // ReferenceError: varFunc is not defined
// All three variables are function-scoped and inaccessible outside the function.

// **Block Scope vs Function Scope**
// 'var' is function-scoped (ignores block scope).
// 'let' and 'const' are block-scoped (and also function-scoped when inside a function).
let x = 10;   // Global scope
var y = 20;   // Global scope
const z = 30; // Global scope

if (true) {  // Block scope starts here
    let x = 100;   // Block-scoped (only exists inside this block)
    var y = 200;   // Function/global-scoped (modifies global 'y')
    const z = 300; // Block-scoped (only exists inside this block)
    
    console.log("Inside block:", x, y, z); // Output: 100 200 300
}

// Outside the block
console.log("Outside block:", x, y, z); // Output: 10 200 30
// Use let or const instead of var – they have block scope, reducing unintended overwrites.
// If the if block is enclosed in a function then both let and var variables can't be accessed outside the function
function fruitname(){
    if(true){
        let f1="pineapple";//local to block
        var f2="mango";//local to function
    }
    // console.log(f1);#ERROR
    console.log(f2);//Output mango
}
fruitname()
// console.log(f1);#ERROR
// console.log(f2);#ERROR

// Another way to declare variable but never to be used is 
f=10; // has global scope everywhere (never to be used since it pollutes global space)

// -------------------- Hoisting --------------------

// Hoisting is JavaScript’s default behavior of moving variable and function declarations 
// to the top of their scope before code execution.

// Function Hoisting

// Functions declared using function are fully hoisted, meaning you can call them even before their definition.

greet(); // Output: "Hello, World!"

function greet() {
    console.log("Hello, World!");
}

// Variable Hoisting

// var is hoisted but undefined

console.log(abc); // Output: undefined (NOT an error)
var abc = 10;
console.log(abc); // Output: 10

// let and const are hoisted but NOT initialized

// console.log(bcd); // ReferenceError: Cannot access 'bcd' before initialization
// let bcd = 20;

// let and const do get hoisted, but they stay in a "temporal dead zone" until the code executes the declaration.
// That’s why accessing b before its declaration causes an error.


