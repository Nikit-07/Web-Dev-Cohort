// A Polyfill function is a function for a method which might not be present in some older version of a browser if yo are using one.

// Let's say you are using some older version of a webside and in your code you have used latest method which might not be present in older version of the browser so you write your own function for that method and add a condition such that if that method is present in website then use it & if not then I am providing that methods as a function use is from their
// This way your website works in all versions of browsers and doesn't lag or generate issues for the users

const arr=[10,20,30,40,50];

if(!Array.prototype.map){
    Array.prototype.map= function(){
        // polyfill function
        // This is called Fallback 
        // if map method is not present write your own map method
    }
}

// arr.map( (item )=>  console.log(item*2));
// console.log(arr);


// 1- for Each polyfill funcion

// signature- return nothing, input- userfn =  parameters item, index

// arr.forEach( function(item, index){
//     console.log(`The value at index ${index} is ${item}`);
// } );



// since we dont have myForEach function as an array metodh so we will create our own polyfill function and add it to Array.prototype
// so now we have our own myForEach so even if the browser does not have myForEach Function I am providing it so that no errors occurs.

if(!Array.prototype.myForEach){
    Array.prototype.myForEach =  function( userFn ){
        const myArr= this; //this keyword points to the current object and in this case it's arr because arr.myForEach is calling this 
        
        for(let i=0; i<myArr.length; i++){
            userFn( myArr[i], i );
        }
    }
}
arr.myForEach( function (item, index){
    // console.log(`The value at index ${index} is ${item}`);
} )


// 2- map polyfill functioin

// signature return array, input-userfn=parameters item, index

// const newArr= arr.map( (item, index)=> item*2);
// console.log(newArr);

// my own map method or polyfill function

if(!Array.prototype.myMap){
    Array.prototype.myMap =  function(userFn){
        const myArr= this;
        const result= [];

        for(let i=0; i<myArr.length; i++){
            let ans= userFn(myArr[i], i);
            result.push(ans);
        }

        
        return result;
    }
}

const newArr= arr.myMap( function(item, index){
    return item *3;
});
console.log(newArr);



// 3- FILTER METHOD POLYFILL FUNCTIONI

// const result= arr.filter(function(item, index){
//     if(item>=30 ){
//         return item;
//     }
// })
// console.log(result);

// SIGNATURE returns array, input-userfn=parameters item, index

if(!Array.prototype.myFilter){
    Array.prototype.myFilter=  function(userFn){
        const result=[];

        for(let i=0; i<this.length; i++){
            let ans= userFn(this[i], i);

            if(ans){
                result.push(this[i]);
            }
        }

        return result;

    }
}

const result= arr.myFilter(function(item, index){
    if(item>=30){
        return true;
    }
});

console.log(result);

