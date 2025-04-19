// OBJECTS -  basically represents real world entities which has some properties(attributes) & Methods(Functionalities)
// EX- Remote, Pen

// Difference Between function and method 
// If a function is a stand alone then it's called a function but if that function is part of the object then it's called a method


// Methods to create an obj
const obj1={
    fname:"Nikie",
    lname: "Bhakuni",
    getFullname: function(){
        return `${this.fname} ${this.lname}`
    }
}



// let's say i want another obj with the same keys 
// Both are independent obj but this method is manual & if I want to add another porperty getFullname then I'll have to add this property in both obj which is not the right way

// Here we are violating DRY principle - Do Not Repeat Yourself Coding principle as we are repeating getFullname functionality 

const obj2={
    fname:"Nikhil",
    lname:"Singh",
    getFullname: function(){
        return `${this.fname} ${this.lname}`
    }
}

// console.log(obj1.getFullname());
// console.log(obj2.getFullname());

// prototypal Inheritance or chaining
// let's say I have an obj3 and in that obj I don't have getFullname function so I can give the referece of obj1 to the obj3.__proto__ so that it can access the function from there

const obj3={
    fname:"Nikit",
    lname:"Bhakuni"
}

obj3.__proto__= obj1;

// This is working due to prototype chaining/inheritance

console.log(obj3.getFullname());



