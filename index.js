const express = require('express');
const server = express();
const cors = require("cors");
const PORT = 4000;
const fs = require('fs');

//using cors and middleware to parse JSON body
server.use(cors());
server.use(express.json()); //body parser

//Simple api to check
// server.get("/",(req,res)=>{
//     res.send("All good")
// })


//api logics with JSON data and W/O mvc approch 
const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
console.log("jsonData",jsonData);



server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});







// ---------------------------------------------NODE Concepts----------------------------------------
// -Nodejs is runtime environment for JS

// JS engines
// Chrome - v8
// Firefox - spider monkey
// Safari - apple JS engine
// For ex : open terminal -> console and write [console.log('Hello') or 2+5] and enter , now JS engine will work and give us output
//CMD : if we try same in cmd we see error as there is no JS engine but after writing [node] it behaves same
// So we see that JS is also working outside the browser on CMD terminal as well with the help of Nodejs runtime env

// Note : We don't get window or alert in nodejs
// because alert is a part of window api and it opens a modal dialog in browser UI but in nodejs there is no UI to show popup.
// Browser runtime : has DOM and window apis
// Nodejs : has fs apis,process apis and networking tools

// hello.js
// -> node hello.js or node hello will run hello file on js


// Math.js


