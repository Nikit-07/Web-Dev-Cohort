let teas=["masala", "ginger", "oolong", "orange", "rose", "lemon"];

console.log(teas.length); //6

// loop- iteration; i
// for loop
// variable le ke aao var i=0
// limit btao <teas.length
// increment/ decrement karo variable ka  i++ or i--



for(let i=0; i<teas.length; i++){

    console.log(`tea at index ${i}: ${teas[i]}`);
}


let arr=[ 1,2,3,4,5,6,7,8];

function sum(numbers){
    let sum=0;
    for(var i=0; i<numbers.length; i++){
        sum+= numbers[i];
    }

    return sum;
}

let ans= sum(arr);


console.log(ans);
