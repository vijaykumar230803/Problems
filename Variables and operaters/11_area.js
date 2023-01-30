const prompt=require("prompt-sync")();

const A =parseInt(prompt("Enter the Side of square:"))

const Area = A * A

const circum = 4* A

console.log("Area of Square:"+Area);

console.log("Circumference of square:"+circum);

