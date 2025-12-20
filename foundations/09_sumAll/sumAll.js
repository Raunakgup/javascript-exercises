const sumAll = function(a,b) {
    if(typeof a !== "number" || typeof b !== "number") return "ERROR";
    if(isNaN(a) || isNaN(b)) return "ERROR";
    let aa=Math.min(a,b);
    let bb=Math.max(a,b);
    a=aa; b=bb;
    if(a<0 || Math.floor(a)!==a || Math.floor(b)!==b) return "ERROR";
    let ans=0;
    for(let i=a; i<=b; i++){
        ans+=i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
