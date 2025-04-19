// We create a class- Blueprint for creating obj so that we don't violate the DRY Principle of the code

// class is a blue-print using which we can create multiple objects without manually writing the properties repetitively 
// A class can only have one constructor if 2 constructor are present then it gives ambiguity error

class Person {
    //1- constructor is used to construct or create an object it says that user has given some parameters like first, last create properties using them
    //2- If we don't create a constructor inside our class the compler automatically creates an empty constructor for us 
    // constructor(){}

    constructor(first, last){
        this.fname= first;
        this.lname=last;
    }
    
     getFullname(){
        return `${this.fname} ${this.lname}`;
    }
}


const obj1= new Person("Nikit", "Bhakuni");
const obj2 = new Person("Nishant", "Singh");

// Whats happening here is that the person class is a original blueprint which has prototype object defined in it
// This method is called Syntatic Sugar => features that make object creation and inheritance appear cleaner and more familiar, even though they are ultimately implemented using prototypes
// So we are saying that the obj1.__proto__ = Person.prototype (Blueprint ka prototype)

console.log(obj1.fname);
console.log(obj2.getFullname());

// --------------------------------------------------------------------------------------------

// There is a extend keyword which also does the same thing as obj1.__proto__= Person.prototype
// let's say we have two different calss and I want to access the funA function inside funB so I can use the extend keyword by writing extend A in Person2
// This is basically doing this   [ person2.__proto__.__proto__ = person1.prototype; ] 



class Person1{
    funA(){
        console.log("Person 1");
    }
}

class Person2 extends Person1{
    funB(){
        console.log("Person 2");
        
    }
}

const person1= new Person1();
const person2= new Person2();


console.log(person2.funA());
console.log(person2.funB());

