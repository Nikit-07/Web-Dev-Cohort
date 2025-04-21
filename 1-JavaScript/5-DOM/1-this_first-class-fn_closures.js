// in function prototype add another function which logs the function name that calls that function

Function.prototype.myName= function(string){
    console.log(`The name of the function is: ${this.name} and your name is: ${string}`);
}
// now inside Function.prototype we have added myName function manually

function greetings(name){
    return `My name is ${name}`;
}

// now if we want to know this function name we have created a function so call it using . operato
// greetings.myName("nikit");

// normal function call
// console.log(greetings("Nikit Bhakuni"));

// FIRST CLASS FUNCTION- means that a function can be passed as an argument to a function, returned from a function, function can be assigned to a variable,  function can be stored inside DATA STRUCTURES like array, objects

function result(a,b, operate){
    return operate(a,b);
}



let addition= result(5,10, (a,b)=> a+b );
console.log(addition);



// CLOSURE FUNCTION- A function that captures & retains the access of the variables from it's surrounding lexical scope(the environment in which the closure function was defined) even afte the outer function has finished it's execution

function counterIncrease(){
    let count=0;
    return function (){
        count++;
        return count;
    }
}


let ans=counterIncrease();

console.log(ans());

// IIFE- Imediately Invoked Function Expression ()() first()-function, second()- Function call/It's execution
(function (){
    console.log("Your Database has been connected");
    
})();

