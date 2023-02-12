const unitCost = 100
let totalCost

const quantity = prompt("Enter the quantity:")

if (unitCost * quantity > 1000) 
  totalCost = unitCost * quantity * 0.9
else
  totalCost = unitCost * quantity
console.log("Total cost: " + totalCost)