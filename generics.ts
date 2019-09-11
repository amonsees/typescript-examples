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
zoo.addAnimal(new Cat('Scruffy', 'Anthony'));



