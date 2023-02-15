// function number(){
//     return 10; 
// }
// console.log(number());

let number = () => 
{
    return 10; 

}
console.log(number());

// param pass  
let userInfo = (name, email) => 
{
   this.name    = name;
   this.email   = email;
}; 

console.log('Pobitro Debnath', 'pobitrodn@gmail.com');

// Looping over a String
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + " ";
}

// Create an Array Iterator object, containing the keys of the array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x + "<br>";
}

// Array Find  
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// Object entries
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}

// the JavaScript Array flat() method
let newArray = arrayObject.flat([depth])
const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);

//Class 
class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const person1 = new Person('John');
  
  console.log(person1.name); // John
