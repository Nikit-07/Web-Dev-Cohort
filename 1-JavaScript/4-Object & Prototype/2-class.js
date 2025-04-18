// We create a class- Blueprint for creating obj so that we don't violate the DRY Principle of the code

// class is a blue-print using which we can create multiple objects without manually writing the properties repetitively 
class person {
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


const obj1= new person("Nikit", "Bhakuni");
const obj2 = new person("Nishant", "Singh");

console.log(obj1.fname);
console.log(obj2.getFullname());
