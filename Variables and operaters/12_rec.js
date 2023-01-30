const prompt=require("prompt-sync")();

const length=parseInt(prompt("Enter Area of Rectangle:"));

const width=parseInt(prompt("Enter Circumference of Rectangle:"));

const Area =length * width

const Circumference= 2 * (length + width)

console.log("Area of rectangle ="+Area);

console.log("Circumference of rectangle ="+Circumference)