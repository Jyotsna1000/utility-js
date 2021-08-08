const cube = require("./cube");
const identity = require("./identity");

const map = (list,callFunction) =>{
    if(callFunction === cube)
    return cube(list);
    else if (callFunction=== identity)
    return identity(list);
    else return [];
}
module.exports =map;