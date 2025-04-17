// Create an array containing different types of teas
const teas = [
  "green tea",
  "black tea",
  "oolong tea",
  "white tea",
  "herbal tea",
];
// console.log(teas);

// add chamomile tea to the existing list of teas
teas.push("chamomile tea");
// console.log(teas);

// remove  "oolong tea"  from the list of teas.
// the filter method of array creates a shallow copy of the original array, so store it in a variable

let newteas = teas.filter((tea) => tea !== "oolong tea");
// console.log(newteas);

// can also solve this using splice method of array

// the indexOf method of the array returns the first index at which the given element is fount and if the element is not found return -1

// the splice method is use if you want to remove or/and  add element in the array arr.splice(index, deletecount, item1,....) this means that starting from index remove deletecount elements and add item1

// splice returns the deleated elements

let index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}
// console.log(teas);

// filter the list to only include teas that are caffeinated (only herbal tea is not caffeinated)
const caffeinated= teas.filter((tea)=> tea !== "herbal tea");
// console.log(caffeinated);

// sort the list of teas in alphabetical order
// console.log(teas.sort());
 
// use a for loop to print each type of tea in array
for(let i=0; i<teas.length; i++){
    // console.log(teas[i]);
}

// use for loop to count total caffeinated teas (excluding "herbal tea")

let caffeinatedTeaCount=0;

for(let i=0; i<teas.length; i++){
    if(teas[i] !== 'herbal tea'){
        caffeinatedTeaCount++;
    }
}
// console.log(caffeinatedTeaCount);


// use for loop to create a new array with all tea names in uppercase.

const uppercaseTeas=[];

for(let i=0; i<teas.length; i++){

    uppercaseTeas.push(teas[i].toUpperCase());
    
}
// console.log(uppercaseTeas);

// use for loop to find the tea name with the most characters.
var maxLenght="";
for(var i=0; i<teas.length; i++){
    if(teas[i].length > maxLenght.length ){
        maxLenght=teas[i];
    }
}
// console.log(maxLenght);

// use a for loop to reverse the order of teas in the array

const reverseArray=[];
for(var i=teas.length-1; i>=0; i--){
    reverseArray.push(teas[i]);
}
// console.log(reverseArray);





