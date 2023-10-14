'use strict';
function calcAge(birthYear) { 
    const age = 2023 - birthYear; 
    function printAge(){
        const output = `You are ${age}, born i n ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true
            const str = `Oh, and you are a millenial, ${firstName}`
            console.log(str)

            function add(a, b) {return a+b}
        }
        //  console.log(str) It doesn't works because the variable has a local scope, and can't be accessed out of its block declaration
         console.log(millenial)
        //  console.log(add(12,53))
    }
    printAge()
    return age
}


const firstName = "Guilherme"
calcAge(1991)

// console.log(age) It doesn't works because the variable has a local scope, and can't be accessed out of its function declaration