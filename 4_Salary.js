const salary = parseFloat(prompt("Enter your salary:"))
const yearsOfService = parseInt(prompt("Enter your years of service:"));

let bonus = 0

if (yearsOfService > 5) {
  bonus = salary * 0.1
const netBonus = salary + bonus
console.log("Your net bonus is: " + netBonus)
