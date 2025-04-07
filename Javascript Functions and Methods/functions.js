// Functions and Methods in javascript
// Syntax
function add(a,b){
    console.log(a+b);
}
add(5,6);
// write a function that takes a string as an input and then returns the number of vowels in a string
function countVowels(str){
    let final_Count=0
    for(const char of str){
        if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            final_Count+=1
        }
    }
    console.log(final_Count)
}
countVowels("fish")
//Arrow function
const sum=(a,b)=>{
    return a+b;
}

console.log(sum);// Gives definition of the function
console.log(sum());// Gives NaN Not a Number
console.log(sum(5,6));