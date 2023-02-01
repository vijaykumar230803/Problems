const prompt = require("prompt-sync")();

const Number =parseInt(prompt("Enter the Number:"));

console.log(Number)

const result =parseInt(prompt("Enter the Result:"));


for(let i= 1;i <=result; i = i+ 1 )
{

     let result = i * Number

     console.log(i + "*"+Number +"=" + result)
}