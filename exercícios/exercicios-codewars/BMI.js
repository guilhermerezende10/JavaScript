function bmi(weight, height) {
    let bmi = weight / height **2
    return bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese"
  }