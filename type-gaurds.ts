import { Dog, Animal, Cat } from "./classes";



export function IsNumber(value: number | string): boolean {
    if (typeof value === 'number') {
        return true;
    }

    return false;
}

export function isDog(animal: Animal) : boolean {
    if (animal instanceof Dog) {
        return true;
    }

    return false;
}

export function isDog2(animal: Dog | Cat) : boolean {
    if ("doTrick" in animal) {
        return true;
    }

    return false;
}

export function IsDogTypeGuard(animal: Dog | Cat) : animal is Dog {
    return ((animal as Dog).doTrick !== undefined) 
}

export function isDog3(animal: Dog | Cat) {
    if (IsDogTypeGuard(animal)) {
        return true;
    }

    return false;
}

const dog: Dog = new Dog('Fido','Bob');

