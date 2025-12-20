const removeFromArray = function(arr, ...args) {
    for(let i=0; i<args.length; i++){
        arr = arr.filter(item => item!==args[i]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
