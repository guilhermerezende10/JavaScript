const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {return this.bmi = (mark.mass / (mark.height * mark.height)).toFixed(2)}
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {return this.bmi = (john.mass / (john.height * john.height)).toFixed(2)}
}

john.calcBMI()
mark.calcBMI()

console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName }'s BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName}'s BMI (${mark.bmi < john.bmi ? mark.bmi : john.bmi})!`)

// console.log(mark.calcBMI())
// console.log(jonh.calcBMI())