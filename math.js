// function add(a,b){
//     return a+b
// }

// function sub(a,b){
//     return a-b
// }

// module.exports = "Ritik Chauhan"        //Exporting a module
// module.exports = add            //single module export

// ------------Multiple Export------------
// module.exports = {
//     add,
//     sub
// }



// ---------------Single Statement Export Function--------------
exports.add = (a,b)=>{
    return a+b
}

exports.sub = (a,b)=>{
    return a-b
}