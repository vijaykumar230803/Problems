const prompt=require("prompt-sync")();

const Tamil =parseInt(prompt("Enter Tamil Mark:"));

const English =parseInt(prompt("Enter English Mark:"));

const Maths =parseInt(prompt("Enter Marks Mark:"));

const Total =Tamil +English +Maths 

const Average = Total / 3

console.log("Average Marks:"+Average)

