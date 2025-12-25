const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(a) {
	const ans = a.reduce((sum,current) => {
        return sum+current;
    },0);
    return ans;
};

const multiply = function(a) {
    const ans = a.reduce((mul,current) => {
        return mul*current;
    },1);
    return ans;
};

const power = function(b,e) {
	return b**e;
};

const factorial = function(a) {
    if(a<0) return undefined;
	if(a==0) return 1;
    return factorial(a-1)*a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
