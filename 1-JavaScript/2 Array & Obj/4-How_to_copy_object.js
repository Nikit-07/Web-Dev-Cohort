// How to copy and object without it's reference

let person1={
    fname:"Nikit",
    lname:"Bhakuni",
    address:{
        house:1,
        state:1
    }
}

// let person2=p1;  //this method copies the object as reference

// so we can copy the object using this method but if ther are large no of key-val pairs then it's impossible to copy
// let person2={
//     fname:"Nikit",
//     lname:"Bhakuni",
// }

// SPREAD OPERATOR ... used to spread out/ expand the iterable (like an array, string, or object) into individual elements.

// so we use ... (spread operator) this creates a shallow copy of the object meaning that it copies the first layer only and not the nested layers inside it


// What's happeing here is that the spread operator copies the first layer only and for the nested layers like address which is object inside the object it passes it as a reference so changes made to person2 address are also reflected in person1 
// This method is called SHALLOW COPY

let person2={
    ...person1
}

// deep copy method

let person1String= JSON.stringify(person1) //this converts the person1 object to string
console.log(person1String);

// now parse this string into object and store it in new variable this creates the copy of the object

let person3= JSON.parse(person1String);
console.log(person3);

person2.address.house=40;
person3.address.house=100;

console.log(person1);
console.log(person2);
console.log(person3); 