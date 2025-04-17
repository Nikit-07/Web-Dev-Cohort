// for createing our own server node gives us built in package of http
const http = require('http');

// curl http://localhost:9000  --method for making incomming request run it after running the server in new terminal 
// curl -X POST http://localhost:9000/xyz to send post req -X write any request name like put post delete check in curl website




// const server= http.createServer( function(req, res){
//     console.log("Incomming request aiya");
//     // to access request method and it's url
//     // console.log(req.method);
//     // console.log(req.url);

//     // switch case laga diya check karene ke liye ki kaunsi req a ri uske hisap se response denge  
//     switch(req.method){
//         case 'GET':{
//             if(req.url==='/') return res.end("Homepage");
//             if(req.url==='/contact-us') return res.end("contact-us page");
//             if(req.url==='/about-us') return res.end("about-us page");

//         }
//         break
//         case 'POST':{
            
//         }
//     }
//     // res.end("Ye lo thumara response");
// } );


// we can also pass a function inside the create server
// function handlerv1(req, res) {
//     console.log("Incomming request aiya");
//     // to access request method and it's url
//     // console.log(req.method);
//     // console.log(req.url);

//     // switch case laga diya check karene ke liye ki kaunsi req a ri uske hisap se response denge  
//     switch(req.method){
//         case 'GET':{
//             if(req.url==='/') return res.end("Homepage");
//             if(req.url==='/contact-us') return res.end("contact-us page");
//             if(req.url==='/about-us') return res.end("about-us page");

//         }
//         break
//         case 'POST':{
            
//         }
//     }
//     // res.end("Ye lo thumara response");
// }


// but the above code is also messy so we install express to make it more readable
const express= require('express');
const handlerFunctionV2= express();

// yaha express apne aap handle kar lega kaunsi request a ri hai aur uske hisab se response bhez dega

handlerFunctionV2.get('/', (req, res)=> res.end("Homepage"));
handlerFunctionV2.get('/contact-us', (req, res)=> res.end("Contact us page"));
handlerFunctionV2.get('/about-us', (req,res)=> res.end("about us page"));



// express ye kaam bhi khud internally kar deti hai   
// const server= http.createServer( handlerFunctionV2 );

// server.listen(9000, function(){
//     console.log("Server started");
// });

// aur is handler function ko app khe lo  toh express ek wrapper hua jo internally khud httpmodule ko imprt kar ke server create kar de
handlerFunctionV2.listen(9000, function(){ 
    console.log("Server started");
});


