//
// blyno receptura ->blynas (valgomas)
//namo brezynis -> namas

class Dog {
    constructor(vardas, kailioSpalva) {
         this.name = vardas;
         this.furColor = kailioSpalva;
         this.age = 0;
         this.legsCount = 4;
         this.hasTail = true;
         this.isStanding = true;
    }

    hi() {
        return `Hi, my name is ${this.name}!`;
    }

    intro() {
        return `Hi, my name is ${this.name}, my fur is ${this.furColor} and I am ${this.age} years old.`;
    }

    birthday() {
        return `Happy birthday ${++this.name}! Now you are ${this.age} years old!`;
    }

    lostTail() {
        this.hasTail = false
    }

    lostLeg() {
        if(this.legsCount > 0 ){
            this.legsCount--;
        }
        this.legsCount--;
    }

    changePose() {
        this.isStanding  = !this.isStanding
        
    }

    changeFurColor(newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur.`;
    }
}

const rex = new Dog ('Rex', 'black');
const brisius = new Dog ('Brisius', 'white');


brisius.changePose();
console.log(brisius);
brisius.changeFurColor('red');
console.log(brisius);
