/*Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */

function compareBMI () {
    const markweight = 78
    const jonweight = 92
    const marktall = 1.69
    const jontall = 1.95

    let BMImark = markweight / marktall ** 2
    let BMIjon = jonweight / jontall ** 2
      
    if (BMImark > BMIjon) {
        var markHigherBMI = true
    }
    else {
        var markHigherBMI = false
    }
    return "Mark's BMI: " + BMImark.toFixed(3) + "\nJon's BMI: " + BMIjon.toFixed(3) 
}

console.log(compareBMI())