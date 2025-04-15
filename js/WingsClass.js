export class WingClass {
    constructor(name, color) {
        this.name = name;
        this.furColor = color;
    }

    hi() {
        return `Hi my name is ${this.name} , ${this.color}.`
    }
}