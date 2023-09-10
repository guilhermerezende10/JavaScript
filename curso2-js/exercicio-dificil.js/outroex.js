class car {
    constructor(make, speed) {
        this.speed = speed
        this.make = make
    }

    acelerate() {
        this.speed+=10
        console.log(`Speed: ${this.speed}`)
    }
    brake() {
        this.speed-=5
        console.log(`Speed: ${this.speed}`)
    }

}

const car1 = new car('BMW', 120)
const car2 = new car('Mercedes', 95)

car1.acelerate()
car1.acelerate()
car1.acelerate()

car1.brake()
car1.brake()

car2.acelerate()
car2.acelerate()

car2.brake()
car2.acelerate()
car2.brake()
car2.brake()