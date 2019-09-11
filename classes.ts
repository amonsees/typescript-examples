


export abstract class Animal {
    constructor(public name: string, protected legs: number) {
        this.name = name;
        this.legs = legs;
    }

    public speak() {
        console.log(`My name is ${name}`)
    }
}


export class Dog extends Animal {
    constructor(name: string, public owner: string) {
        super(name, 4);
    }

    public speak() {
        console.log('Woof, Woof');

        super.speak();
    }

    public doTrick(trick : 'rollover' | 'laydown'| 'play fetch' = 'rollover') {
        console.log(`${this.name} is doing trick ${trick}`);
    }
}


export class Cat extends Animal {
    constructor(name: string, protected owner: string) {
        super(name, 4);
    }

    public speak() {
        console.log('Meow');

        super.speak();
    }
}

const animal : Animal = new Dog('Fido','Anthony');

animal.name = 'Charley';

animal.speak();

(animal as Dog).doTrick('laydown');









