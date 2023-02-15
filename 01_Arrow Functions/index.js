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