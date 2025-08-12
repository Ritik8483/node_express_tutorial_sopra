function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

// module.exports = "Ritik Chauhan"        //Exporting a module

// module.exports = add            //single module export

module.exports = {
    add,
    sub
}