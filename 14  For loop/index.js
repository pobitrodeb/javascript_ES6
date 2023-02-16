for(let i = 10; i <= 25; i++)
{
    console.log(i);
}

// For In 

const myObject = {
    name: "DEVSoft", 
    date:2001, 
    founder: 'Pobitro Debnath'
};

for(property in myObject)
{
    console.log(property);
}

// for of 
const myArry = [1,2,3,4,5,6,7,8,9];
for(element in myArry)
{
    console.log(element);
}
const myString = 'I still love you KmoniRoy';
for(stringText of myString)
{
    console.log(stringText);
}