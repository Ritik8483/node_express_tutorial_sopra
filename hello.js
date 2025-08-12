// console.log("hello world!")

// --------------------------------
// const mathFile = require("./math");     //Importing a module
// console.log("mathFile",mathFile(2,7));      //gives single 

// --------------------If Mutiple imports

// const mathFile = require("./math"); 
// console.log(mathFile.add(2,7));
// console.log(mathFile.sub(7,1));



// ---------------------------------------Single Statement Export Function--------------
const math = require("./math");
console.log(math.add(3,5));
console.log(math.sub(13,5));
