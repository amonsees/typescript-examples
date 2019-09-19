import { Animal, Dog, Cat } from "./classes";



export function genericFunc<T>(param: T): T {
    return param;
}


const int: number = genericFunc(23);

export class ZooArea<T extends Animal> {
    private animals: T[];

    constructor(public areaName: string) {}


    addAnimal(animal:T) {
        this.animals.push(animal);
    }
}

const dogHouse = new ZooArea<Dog>('Backyard Dog House');

const zoo = new ZooArea<Dog | Cat>('Backyard Dog House');

dogHouse.addAnimal(new Dog('Fido','Anthony'));

zoo.addAnimal(new Dog('Fido', 'Anthony'));
zoo.addAnimal(new Cat('Scruffy'));




function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');

getProperty(x, 'd');


