let name="Nikit";

let name1=name;
console.log(name1);

name1="Nikit Bhakuni";
console.log(name);
console.log(name1);

// in this case the value of name1 will be changed only because it is just making a copy of the name here

// Inside objects

let person={
    name:"Nikit",
}

let person1=person;

console.log(person1);

person1.name="Nikit Bhauni"; // in objects we directly give the reference of the original object, that's why changing the value of person1.name changes the value inside person.name 
console.log(person);
console.log(person1);


