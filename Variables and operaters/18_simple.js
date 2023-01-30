const prompt=require("prompt-sync")();

let P =parseInt(prompt("enter principle:"));

let N = parseInt(prompt("Enter Number of year:"));

let R = parseInt(prompt("Enter Rate of Per Annum:"));

console.log("simple Interest =",P * N * R /100)