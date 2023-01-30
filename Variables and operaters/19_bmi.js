const prompt =require("prompt-sync")();

const weight = parseInt(prompt("Enter the weight:"));

const height = parseInt(prompt("Enter the height:"));

const BMI = weight / height * 2

console.log("Weight in kg:",BMI)

console.log("Height in meter:", BMI)