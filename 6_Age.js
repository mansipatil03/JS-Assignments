const age1 = parseInt(prompt("Enter the age of person 1:"))
const age2 = parseInt(prompt("Enter the age of person 2:"))
const age3 = parseInt(prompt("Enter the age of person 3:"))
let oldest = age1
let youngest = age1
if (age2 > oldest)
  oldest = age2
if (age3 > oldest)
  oldest = age3
if (age2 < youngest)
  youngest = age2
if (age3 < youngest)
  youngest = age3
console.log("Oldest person is " + oldest + " years old.")
console.log("Youngest person is " + youngest + " years old.")
