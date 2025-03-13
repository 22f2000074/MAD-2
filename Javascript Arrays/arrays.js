// Arrays in JS
// Arrays in js can include all kinds of data type but generally arrays are made of homogenous data types
let arr=[23,45,45,7,8,412,778,545];
//Array methods
console.log(arr);
console.log(arr.length);// gives length of an array
console.log(typeof(arr));//gives type of an array which is object.
// Array is not a primitive data type for JS and can be though of as an object with key value pairs just that the
// keys are actually indexes starting from 0.
console.log(arr[1]);// Square brackets can be used to access elements in an array.
// when index is greater than length of array it returns undefined
console.log(arr[8]);// undefined
// we can change values at a particular index
console.log(arr[1]);
arr[1]=100;
console.log(arr[1]);
// Strings are immutable and cannot be changed but arrays are mutable
// looping over an array
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let elm of arr){
    console.log(elm);
}//gives values
for(let elm in arr){
    console.log(elm);
}// gives indexes

//Given an array for items in a store which is running a 10% off on all items. Change the array to store final prices post discount.
let arr1=[250,645,300,900,50];
for(let i=0;i<arr1.length;i++){
    arr1[i]=arr1[i]*0.9;
}
console.log(arr1);
// push and pop methods can be used on the array to add and delete from end respectively.
// converts array to string
let string1=arr.toString();
console.log(string1);
// concat joins multiple arrays and returns result
let concatArray=arr1.concat(arr);
console.log(concatArray);
// concat create another array and does not mess up with the original arrays
// unshift adds to start
// shift deletes from start
// slice returns a piece of array
let students=["Rahul","Shyam",'Ram',"Gian", "Suneo", "nobita"];
console.log(students);
console.log(students.slice(1,4));// returns index 1 2 and 3
// splice method changes the original array
students.splice(1,2,101,102);// splice(start index, deletecount, new elem1...)
console.log(students);
// splice can be used to add delete and replace elements
students.splice(1,0,"Harsh");
console.log(students);
students.splice(2,2);
console.log(students);
students.splice(1,1,"Rakesh")
console.log(students);

