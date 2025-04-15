/*
Animal:
    Pet:
        -Dog
        -Cat
        -Hamster

    Bird:
        -Parrot
        -Hummingbird
        -Eagle

    Fish
        -Shark
        -Dophin
        -Tuna
*/
import  { Dog }  from "./js/Dog.js"

const rex = new Dog('Rex');
console.log(rex)
console.log(rex.hi());
console.log(rex.voice());
