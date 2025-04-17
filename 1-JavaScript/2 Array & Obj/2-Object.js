 let person={
    age:"24",
    firstName: "Nikit",
    lastName: "Bhakuni",
    hobbies: ["Coding", "running", "Walking"],
    working: false,
    fullName: function (){
        return "NIkit Bhakuni";
    },
    address: {
        city:"Delhi",
        state:"Delhi",
    }
 }

 console.log(person.working); //false
 
//  for accessing the value of object inside the parent object
console.log(person.address.city);  //Delhi



//  if we try to access a key that is now in object then it will give undefined
console.log(person.myname);  //undefined

 
// Let's take a real world example of a tv remote

let remote= {
    color:"red",
    brand:"sony",
    dimensions: {
        height:1, width:2,
        power: function (){
            console.log("Power on of");
        }
    },
    volume: function (){
        console.log("vol up down");
        
    }
}