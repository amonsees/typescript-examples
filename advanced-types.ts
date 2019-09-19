import { ZooArea } from "./generics";
import { Dog, Cat, Animal } from "./classes";

// Create custom type
type numstr = number | string;


// Union Types - Primitive types

export function doSomething(value: numstr) {
    let numValue: number;
    let stringValue: string;

    // Type checking for primitive types
    if (typeof(value) === 'string') {
        stringValue = value;
    } else {
        numValue = value;
    }
}

doSomething('String value');
doSomething(123);


type dogOrCat = Dog | Cat;

// Union Types - Objects
function doTrick(animal : dogOrCat, trick: 'rollover' | 'laydown'| 'play fetch' = 'rollover') {
    if (animal instanceof Dog) {
        animal.doTrick(trick);
    } else {
        console.log(`Cat looks at you like you're crazy!`);
    }
}

function doTrick2(animal : dogOrCat, trick: 'rollover' | 'laydown'| 'play fetch' = 'rollover') {
    if ('doTrick' in animal) {
        animal.doTrick(trick);
    } else {
        console.log(`Cat looks at you like you're crazy!`);
    }
}

// Custom TypeGuard
export function isDogTypeGuard(animal: Dog | Cat): animal is Dog {
    if ((animal as Dog).doTrick !== undefined) {
        return true;
    }

    return false;
}


function doTrick3(animal : Dog | Cat, trick: 'rollover' | 'laydown'| 'play fetch' = 'rollover') {
    if (isDogTypeGuard(animal)) {
        animal.doTrick(trick);
    } else {
        console.log(`Cat looks at you like you're crazy!`);
    }
}



