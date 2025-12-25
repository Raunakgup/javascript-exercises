const palindromes = function (a) {
    const arr = a.split('');
    const newArr=[];
    arr.forEach(el => {
        const upperCaseEl = el.toUpperCase();
        if((upperCaseEl>='A' && upperCaseEl<='Z') || (upperCaseEl>='0' && upperCaseEl<='9')){
            newArr.push(upperCaseEl);
        }
    });
    const len=newArr.length;
    for(let i=0; i<len/2; i++){
        if(newArr[i]!==newArr[len-1-i]){
            return false;
        }
    } 
    return true;
};

// Do not edit below this line
module.exports = palindromes;
