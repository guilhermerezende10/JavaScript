const guilherme = {
    firstName: 'Guilherme',
    year: 2008,
    calcAge: function() {
        // console.log(this) It is gonna show the method (the full object called 'guilherme')
        console.log(2023 - this.year)

        // Solution 1
        // const self = this // self or that, we atribute this to an variable to keep its value
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996)
        // }
        // isMillenial()


        // Solution 2
        const isMillenial = () =>{
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial()
    },
     
    greet: () => console.log(`Hello ${this.firstName == undefined ? 'there' : this.firstName}`)
}

guilherme.calcAge()
guilherme.greet() // Arrow functions doesn't have their own this keyword, then it points to the closier one, in this case, the global method.

const addExp = function (a, b){
    console.log(arguments)
    return a + b
}

// addExp(2, 5, 9)

var addArrow = (a, b) => {
    console.log(arguments)
    return a + b

}

console.log(addArrow(2, 5, 8))