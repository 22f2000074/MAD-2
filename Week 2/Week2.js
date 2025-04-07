// Week 2 - JavaScript Advanced Topics
// Revision 
// var let and const all are hoisted but only var can be accessed by a function before declaration.
//functions can also be hoisted.
// let and const move to the temporal dead zone and can be accessed only after declaration
// however var can't be used before value assigning even if its declared before.

function print(a){
    console.log(a);
}
              
print(a);// returns undefined // a can be accessed here even before declaration but function returns undefined
var a;
var a=10;
console.log(window.a);// output 10
// var creates a global variable in the window object and it makes a property in the window object and can be accessed this way.
let x=20;
let y='20';
console.log(x===y);// output false checks for both value and type
console.log(x==y);// output true checks for just value
//setInterval(()=>{console.log("Hello")},1000);//runs a function every 1 second
clearInterval(setInterval(()=>{console.log("Hello")},10000));//clears the interval
setTimeout(()=>{console.log("Hello")},1000);//runs a function after 1 seconds
for(const i in [1,2,3,4,5]){
    console.log(i);// in gives indexed 0,1,2,3,4
}
for (const i of [1,2,3,4,5]){
    console.log(i);// of gives values 1,2,3,4,5
}