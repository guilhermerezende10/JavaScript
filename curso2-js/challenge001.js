/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John. */

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