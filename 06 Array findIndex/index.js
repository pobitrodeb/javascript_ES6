var numbers = [1,2,3,4,5,6 ];

 var result = numbers.findIndex((currentValue, index, arr) => {
    return !(currentValue )% 2 ;
});

console.log(result);