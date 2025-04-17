let fruits= ["Mango", "Grapes", "Banana"];
// another method to declare array using new keyword
let intFruits= new Array("kiwi", "avacado", "dragon fruit");


console.log(typeof fruits);
console.log( typeof intFruits);

// to change array value
fruits[0]="Blueberry";

// to access value inside array
console.log(fruits[0]);

// to check length of the array
console.log(fruits.length);

// push- to add element at the end of the array
fruits.push("Orange");
console.log(fruits);

// unshift- to add element at the start of the array
fruits.unshift("blackberry");
console.log(fruits);

// pop- to remove last element
fruits.pop();
console.log(fruits);

// to sort the array
let arr=[1,4,5,2,7,3,2,1];
console.log(arr.sort());







