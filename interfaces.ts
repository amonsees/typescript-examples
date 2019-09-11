
export interface IAnimal {
    name: string;
    readonly legs: number;

    speak(): void;
}


let animal : IAnimal = {
    name:'Dog',
    legs: 4,
    speak() {
        console.log('Woof woof!');
    }
}

animal.name = "Fido";

animal.speak();



