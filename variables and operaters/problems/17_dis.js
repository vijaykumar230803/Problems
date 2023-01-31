const prompt=require("prompt-sync")();

const purchaseAmount= parseInt(prompt("Enter Total Purchase Amount:"));

const finalAmount = purchaseAmount -(20 /100)

console.log("finalAmount=",finalAmount)