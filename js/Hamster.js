import { Pet } from "./Pet.js";

export class Hamster extends Pet {
constructor(name, furColor) {
    super(name,furColor)
    this.sound = 'krimst';
}
    voice() {
        const sound = (' ' + this.sound.repeat(2));
        return `${this.name}: ${sound}.`

}
}