import { Car } from "./js/Car.js";

const volvo = new Car('Volvo S40', 'red', 55);
const zapas = new Car('Zapas', 'white', 35);
console.log(volvo.intro());
console.log(zapas.intro());
console.log(zapas.refill(10));
console.log(zapas.engineIsOn);
