// to increase or decrease wokers
process.env.UV_THREADPOOL_SIZE=10; 

const fs=require('fs');
const crypto= require('crypto');

setTimeout( () => console.log("Set Timeout"), 0);

setImmediate(() => console.log("Set Immediate"));





fs.readFile('sample.txt', 'utf-8', function(err, data){
    setTimeout(()=> console.log("Set Timeout inside fs"));
    setImmediate(()=> console.log("set Immediate inside fs"));

    const startDate=Date.now();
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 1 `);
    });
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 2 `);
    });
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 3 `);
    });
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 4 `);
    });
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 5 `);
    });
    crypto.pbkdf2('password', 'salt1', 100000, 1024, 'sha512', (err, data)=>{
        console.log(`[${Date.now()-  startDate}ms]: Password Hashed 6 `);
    });





});

console.log("Hello");

