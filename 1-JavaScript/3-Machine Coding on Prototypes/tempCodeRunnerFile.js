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