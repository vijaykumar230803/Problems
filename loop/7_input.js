const prompt = require("prompt-sync")();

const Number = parseInt(prompt("Enter Input Number:"));

for(let i = 1; i <= 10; i = i + 1)
{
    let result= i * Number  

    console.log(i +"*"+ Number+"="+ result)
}