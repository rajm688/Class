class animal{
    constructor(speed,position = 0){
        this.speed = speed;
        this.position = position;
    }
    run(){
        return `animal runs with a speed: ${this.speed}`
    }
    stop(){
        return `animal stands at this position: ${this.position}`
    }
}
let cat = new animal(100,0)
let dog = new animal(50,0)
console.log(cat);
console.log(dog)