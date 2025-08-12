const fs = require("fs");

//it overrides context but append not 
// fs.writeFileSync("./text.txt","Hey There Ritik")        //create a file with text inside it in project {sync call}
// fs.writeFile("./text.txt","Hey There Ritik Async",(err)=>{        //takes a callback function also
//     console.log("error --- ",err);
// })

// ====================================

// const result = fs.readFileSync("./contacts.txt","utf-8")         //create a file contacts.txt and write text inside it;utf-8 - encoding
// console.log("result",result);                       //saving in variable to see result
// fs.readFileSync("data.json", "utf-8")        //if json
// fs.readFile("./contacts.txt","utf-8",(error,result)=>{        //it not return result ; it takes callback
//     if(result){
//         console.log("result",result);
//     }
//     else{
//         console.log("error",error);
//     }
// })         

// ==================================

// fs.appendFileSync("./text.txt","3")         //it will add 3 behind the text every time

// =======================================

// fs.copyFileSync("./text.txt","./copy.txt")          //copy text file to copy file


// =================================
// fs.unlinkSync("./copy.txt")         //delete copy file

// ===========================================

// console.log(fs.statSync("./text.txt") );        //get status of file   


// ======================================
// Sync/BLOCKING EXAMPLE
// console.log("1")
// const response = fs.readFileSync("./text.txt","utf-8");
// console.log("response",response);
// console.log("2")            //this will execute only after readFileSync finished executing


// Async / Non-Blocking Example
// console.log("1")
// fs.readFile("./text.txt","utf-8",(error,result)=>{
//     if(result){
//         console.log("result",result);
//     }
//     else{
//         console.log("error",error);
//     }
// });
// console.log("2")  


// =======================================================
// const os = require("os")
// console.log(os.cpus().length)


// --------------------------------------------------------------------------

// Note : Sync always returns result but async always return callback

// fs.writeFileSync("./text.txt", "Hey There Ritik");
// Blocking call — the Node.js event loop will stop and wait until the file is completely written.
// If the file is large or disk I/O is slow, nothing else in your app will run during that time.
// not good for high-performance servers where blocking is a problem.



// fs.writeFile("./text.txt", "Hey There Ritik");
// Non-blocking call — file writing happens in the background, and the event loop is free to do other work.
// It prevents blocking requests.
// Uses a callback function to handle success or errors after the operation finishes.