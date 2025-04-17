// Another way to export the function

// exports.add= function (x,y){
//     return x+y;
// }

// exports.subtract= function (x,y){
//     return x-y;
// }

// default export method
// module.exports= function() {
//     return "This is coming from default export";
// };



// using default export we can also export multiple function inside it using object
const add= function (a,b){
    return a+b;
}
const sub= function (a,b){
    return a-b;
}

module.exports= {
    add,
    sub,
}



// exports  is basically an empty object {} using which we can export the function to other files we can also use import export but
// in old code files this is written

// way to export function
// exports.name="Nikit Bhakuni";
// exports.add=add;
// exports.subtract= subtract;