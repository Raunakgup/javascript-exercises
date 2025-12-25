const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    let ans = -1;
    let ind = -1;
    people.forEach((item,index) => {
        if(!("yearOfDeath" in item)) {
            item["yearOfDeath"]=null;
            item["age"]=currentYear-item.yearOfBirth;
        }else{
            item["age"]=item.yearOfDeath-item.yearOfBirth;
        }
        if(item.age>ans){
            ans=item.age;
            ind=index;
        }
    });
    return people[ind];
    
};

// Do not edit below this line
module.exports = findTheOldest;
