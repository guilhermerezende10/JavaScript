const dogs = [
    { weight: 22, curFood: 284.43, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['John', 'Sarah'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
]

dogs.forEach(dog => {
    dog.recommendedFood = Number(dog.weight ** 0.75 * 28).toFixed(2)
    console.log(`Recomended food: ${dog.recommendedFood}g`)
})

const ownersEatTooMuch = []
const ownersEatTooLittle = []

dogs.forEach((dog) => {
    dog.owners.forEach((owner) => {
        if(owner == 'Sarah') {
        if(dog.curFood >= dog.recommendedFood * 1.1){
            console.log(`Sarah's dog ate too much`)
        }

        else if(dog.curFood <= dog.recommendedFood * 0.9) {
            console.log(`Sarah's dog ate too little`)
        } else {
            console.log(`Sarah's dog is eating as usually`)
        }
    }
   })
})

dogs.forEach((dog) => { 
    dog.curFood >= dog.recommendedFood * 1.1 ? ownersEatTooMuch.push(dog.owners) : null
    dog.curFood <= dog.recommendedFood * 0.9 ? ownersEatTooLittle.push(dog.owners) : null
})

function dogsEating() {
    console.log(`\nOwners that their dog eats to much:`)
    for(i in ownersEatTooMuch) {
        for(j in ownersEatTooMuch[i]) {
            console.log(`${ownersEatTooMuch[i][j]}`)
        }
    }
    console.log(`\nOwners that their dog eats to little:`)
    for(i in ownersEatTooLittle) {
        for(j in ownersEatTooLittle[i]) {
            console.log(`${ownersEatTooLittle[i][j]}`)
        }
    }
}

dogsEating()

function exactlyAmount() {
    console.log("\n")
    dogs.forEach(dog => {
        dog.recommendedFood == dog.curFood ? console.log("true") : console.log("false")

    }) 
}

exactlyAmount()

const eatingOkay = []

function okay() {
    console.log("\n")
    dogs.forEach(dog => {
        if(dog.recommendedFood >= dog.curFood * 0.9 &&  dog.recommendedFood <= dog.curFood * 1.1) {
            console.log("true") 
            eatingOkay.push(dog)
        }

        else {
            console.log("false")
        }
    }) 
}

okay()

//console.log(eatingOkay)

const shallowCopy = () => {
    let dogsCopy = [[dogs[0]]]
    dogs.forEach(dog => {
        var index = 0
        for(var i = 1; i < dogsCopy.length; i++) {
            //console.log(`Blagdf: ${i}`)
            console.log(`dogsCopy[i].recommendedFood: ${i}`)
            dog.recommendedFood > dogsCopy[i].recommendedFood ? index = i + 1 : index = i
        }

        console.log(`index: ${index}`)

        //dogsCopy.splice(index, 0, dog) 
    })

    //console.log("\n\n")
    //console.log(dogs)
    console.log("\n\n")
    //console.log(dogsCopy)
}

shallowCopy()









