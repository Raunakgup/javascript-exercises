const fibonacci = function(ind) {
    ind = +ind;
    if(ind<0) return "OOPS";
    if(ind==0) return 0;
    if(ind<=2) return 1;
    let a=1;
    let b=1;
    let c;
    for(let i=1; i<=ind-2; i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
