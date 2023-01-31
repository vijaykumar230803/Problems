const prompt=require("prompt-sync")();

const R =parseInt(prompt("Enter Area of circle:"));

const PI =parseInt(prompt("Enter circumference of circle:"));

const Area = PI * R * 2

const circumference = 2 * PI * R

console.log("Area of circle:"+ Area)

console.log("Circumference of circle:"+circumference)