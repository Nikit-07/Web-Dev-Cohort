// create obj of tea with properties for name, type, caffeine content
const tea= {
    name: "Green Tea",
    type:"Green",
    caffeine: "Low content",
}

// access and print name & type propety of tea obj
console.log(tea.name);
// another method
console.log(tea["type"]);


// add new property origin to tea obj
tea.origin ="China";
console.log(tea);

// change caffeine level to medium
tea.caffeine="Medium";
console.log(tea);

// remove type property for tea obj
delete tea.type;
// console.log(tea);

// check if tea obj has property origin
// console.log("origin" in tea);

// use a for in loop to print all prop.. of obj
for(let key in tea){
    // console.log(`${key}: ${tea[key]}`);
}

// create nested obj with multiple teas
const nestedTea={
    greenTea:{
        type:"Green",
        origin:"China",
    },
    blackTea:{
        type:"Black",
        origin:"China",
    }
}

// create a copy of the tea object
const copy = JSON.parse(JSON.stringify(tea));
copy.name="Red Tea";
// console.log("deep copy", copy);









