

var roles = [1,2,3,4,5,6,7,8,9]; 

var result = roles.filter((currentValue, index, arr) => {
    return currentValue > 4;
});

// console.log(result);
// console.log(roles);