// Arrow function
// find((element) => { /* … */ })
// find((element, index) => { /* … */ })
// find((element, index, array) => { /* … */ })
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function (element) { /* … */ })
// find(function (element, index) { /* … */ })
// find(function (element, index, array) { /* … */ })
// find(function (element, index, array) { /* … */ }, thisArg)

var rolls = [1,2,3,4,5,6]
var result = rolls.find(function(currentValue){
    return currentValue > 4
});

console.log(result);

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
  
  console.log(inventory.find(isCherries));

