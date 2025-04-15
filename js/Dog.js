import { Pet } from "./Pet.js";

export class Dog extends Pet {
    constructor(name, furcColor) {
        super(name, furcColor);
        this.sound = 'au';
        
    }
   
    voice() {
        return `${this.name}: ${this.sound} !`;

}
}