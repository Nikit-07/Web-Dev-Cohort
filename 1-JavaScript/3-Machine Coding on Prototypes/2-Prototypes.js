// what are prototypes it's basically the build in methods of the dataypes like arrays methods, string methods object methods

// An Array data type has a prototype object which has all the properties inside it Array.prototype={}
// when we create an array variable in js all the properties of this Array.prototype={} gets copeid into the arr.__proto__={} object
// arr.__proto__= Array.prototype={}
// that's why we can access them in our varialble

const arr=[10,20,30,40];
console.log(arr.length);


// we can also create our custome methods and can access them 
// this will get added into Array.prototype
Array.prototype.name= function(){
    console.log("My name is nikit bhakuni");
}
arr.name();


