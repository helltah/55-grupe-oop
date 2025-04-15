class Dog {
    constructor(name) {
        this.name = name;
    }

    hi() {
        return `HI, my name is ${this.name}!`;

    }
}

const brisius = new Dog ('Brisius');

console.log(brisius);
console.log(brisius.hi());


class Matematika {
    static sudetis(a, b) {
        return a + b;
    }

    static skirtuma (a, b) {
        return a - b
    }

    static sandauga (a, b) {
        return a * b
    }
}


console.log(Matematika.sudetis(7,5));
console.log(Matematika.skirtuma(7,5));
console.log(Matematika.sandauga(7,5));

class Tekstas {
    static
}