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

// -------------------- Data Types --------------------

// Primitive Data Types
// Number
// BigInt
// Symbol
// Boolean
// undefined
// null
// String

// Object (non-primitive)

console.log(typeof("ABCD")); // typeof operator is used to know the data type.

// Operator precedence

// Exponentiation > Multiplication = Division = Remainder (goes left to right in case of same precedence) > 
// Addition = Subtraction
// All mathematical operators go from left to right
// but the exponential operator goes from right to left

console.log(2**3**0); // Output is 2
console.log('2'+2); // Outpput is 22
console.log(2+2+'2'); // Output is 42

// true = 1 and false = 0
console.log(2+2+true); // Output is 5
console.log(2+'2'+true); // Output is 22true
// any interaction between a number and undefined gives NaN
console.log(2*undefined);
console.log(2*null);// null treated as 0
console.log('2'+undefined); // Output is '2undefined'

// any other operation (* / % - **) other than + in case of string will try to convert into a number
console.log(2*'8'); // Output is 16
// if in case the string cannot be converted to a number then NaN is returned

// adding a n to a number changes its data type to big int
let number_1=455666645644564n;
console.log(typeof(number_1)); // returns type bigInt

// --------------------  Conditional Statements --------------------
let my_age = 18;
if (my_age>=18){
    console.log("You are an adult.")
}
else{
    console.log("Grow Up Kid");
}
// use else if for other conditions
// and > &&
// or > ||
// not > !

// --------------------  Loops --------------------

// traditional way
for (let i=0; i<=5; i++){
    console.log(i);
}

let j=0;
while (j<=5) {
    console.log(j);
    j++;
}
console.log(j);// Output is 6 because first increment  occurs and then value is checked

// --------------------  Arrays and Objects --------------------

// Declaring an array (can hold multiple data types)
let arr = [1, 2, 3, "hello"];
console.log(arr);

// Declaring an object (key-value pairs)
let object1 = {
    pizza: "Farmhouse",
    burger: "Cheeseburger",
    pasta: "Red Sauce"
}
console.log(object1);

// Arrays are similar to lists in Python, and objects are similar to dictionaries in Python.

// Accessing items in an array
// 'in' gives indexes (keys)
// 'of' gives values
for (let x in arr) {
    console.log(x); // Index (0, 1, 2, 3)
    console.log(arr[x]); // Corresponding value
}
for (let x of arr) {
    console.log(x); // Value (1, 2, 3, "hello")
}

// If an object is declared using 'const', its reference cannot be reassigned,
// but its internal properties can be modified.
const obj2 = {
    pizza: "Farmhouse",
    burger: "Cheeseburger",
    pasta: "Red Sauce"
}
console.log(obj2);

// Adding a new key-value pair to an object
obj2.delivery = "free";
console.log(obj2);

// Iterating over an object's keys and values
for (let x in obj2) {
    console.log(x + ":" + obj2[x]); // Correct way to access property values
}

// 'of' cannot be used with objects as they are not iterable

// -------------------- Objects with Methods --------------------

// An object can have functions, referred to as methods.
const dog = {
    name: "Tommy",
    speaks: function () {
        console.log("Dog barks");
    }
}
console.log(dog.name);   // Accessing properties using dot notation
console.log(dog["name"]); // Accessing properties using bracket notation
dog.speaks(); // Calling the method

// 'this' inside a method refers to the object itself
const dog2 = {
    name: "Tommy",
    speaks: function () {
        console.log(this.name + " barks"); // Output: "Tommy barks"
        console.log(dog2.name + " barks"); // Output: "Tommy barks"
    }
}
dog2.speaks();

// -------------------- Using 'this' Dynamically --------------------

// 'this' can dynamically refer to different objects
function bark() {
    console.log(this.name + " barks.");
}
const d1 = {
    name: "Tommy",
    bark: bark
}
const d2 = {
    name: "Bruno",
    bark: bark
}
d1.bark(); // Output: "Tommy barks"
d2.bark(); // Output: "Bruno barks"

// -------------------- Arrow Functions --------------------

// Arrow functions provide a concise way to define functions
let add4 = (a, b) => {
    console.log(a + b);
}
add4(50, 60); // Output: 110

// Arrow functions do NOT create their own 'this' and refer to 'this' from their enclosing scope
obj5 = {
    fruit: "Apple",
    price: 50,
    say() {
        console.log(`${this.fruit} is priced at ${this.price}.`);
    },
    say_arrow: () => {
        console.log(`${this.fruit} is priced at ${this.price}.`);
    }
}
obj5.say(); // Output: "Apple is priced at 50."
obj5.say_arrow(); // Output: "undefined is priced at undefined."

// 'this' in arrow functions depends on the outer execution context (not the object itself)
this.fruit = "Orange";
this.price = 50;
obj5.say_arrow(); // Output: "Orange is priced at 50."

// -------------------- call, bind, and apply --------------------

// These methods allow changing the context ('this') of function calls

obj6 = {
    fruit: "Kiwi",
    price: 150
}

// Using 'call' to invoke obj5's method with obj6 as 'this'
obj5.say.call(obj6); // Output: "Kiwi is priced at 150."

// Function using 'this'
function add5() {
    console.log(this.x, this.y);
}

ob = {
    x: 50,
    y: 70
}

// 'call' allows passing an object as 'this'
add5.call(ob); // Output: 50 70

// Using 'call' with additional arguments
function add6(s, h) {
    console.log(this.x + this.y + s + h);
}

// 'call' - Pass arguments separately
add6.call(ob, 10, 20); // Output: 150

// 'apply' - Pass arguments as an array
add6.apply(ob, [10, 20]); // Output: 150

// 'bind' - Returns a new function with 'this' set
let binded = add6.bind(ob, 10, 20);
binded(); // Output: 150

