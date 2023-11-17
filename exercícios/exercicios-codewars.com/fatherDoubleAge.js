function twiceAsOld(dadYearsOld, sonYearsOld) {
    let finalAge = sonYearsOld * 2
    switch(finalAge) {
        case dadYearsOld == finalAge: return 0
        break
        case dadYearsOld > finalAge:  
        let result =  finalAge - dadYearsOld
        return -result
        break 
        default: 
        let result1 = dadYearsOld - finalAge
        return -result1
    }
}

console.log(twiceAsOld(50, 28))