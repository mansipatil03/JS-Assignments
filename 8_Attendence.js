const classesHeld = parseInt(prompt("Enter the number of classes held:"))
const classesAttended = parseInt(prompt("Enter the number of classes attended:"))

const attendancePercentage = (classesAttended / classesHeld) * 100

console.log("Your attendance percentage is " + attendancePercentage + "%.")

let allowed = true

if (attendancePercentage < 75) 
  allowed = false
if (allowed)
  console.log("You're allowed in the exam.")
else
  console.log("You aren't allowed in the exam.")

