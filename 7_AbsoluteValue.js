const number = parseFloat(prompt("Enter a number:"))

let absoluteValue = number

if (number < 0) {
  absoluteValue = -number;
}

console.log("The absolute value of " + number + " is " + absoluteValue + ".");
