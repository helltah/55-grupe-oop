/*
Transporto priemones:
Automobilinis:
    Audi
    Volkswagen
    Renault
Motociklai:
    Suzuki
    Kawasaki
    Jawa
    Vespa
Sunkvezimiai:
    Volvo
    Man
    Scania
*/

/*
Elektronika:
Smart phone:
    - Samsung smart phone
    - Apple smart phone
    - Nokia smart phone
Tablet:
    - Samsung tablet
    - Xiomi tablet
Laptop:
    - Asus
    - Lenovo
    - IBM
    - Acer

*/

/*
Animal:
Pet:
    - Dog
    - Cat
    - Hamster
Bird:
    - Parrot
    - Hummingbird
    - Eagle
Fish:
    - Shark
    - Dolphin6
    - Tuna
    - Pike
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";
import { Pike } from "./js/Pike.js";
import { Shark } from "./js/Shark.js";
import { Parrot } from "./js/Parrot.js"
import { Hummingbird } from "./js/Hummingbird.js"
import { Eagle } from "./js/Eagle.js"


const rex = new Dog('Rex', 'black');
const rainis = new Cat('Rainis', 'mixed');
const keksas = new Hamster('Keksas', 'brown');

const antanas = new Shark('Antanas');
const lydeka = new Pike('Lydeka');

const pufas = new Parrot('Pufas', 'Zalias');
const Lola = new Hummingbird('Lola', 'Balta');
const Bonas = new Eagle('Bonas', 'Juodas');

console.log(pufas);
console.log(Bonas);
console.log(Lola);


