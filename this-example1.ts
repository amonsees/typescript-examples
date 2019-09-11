export class ReferenceClass {
    constructor(public message: string) { }

    sayHello() {
        console.log(`Hello ${this.message}`);
    }

    delayedHello() {
        setTimeout(this.sayHello, 100);
    }
}

new ReferenceClass('Standard').sayHello();

new ReferenceClass('Delayed').delayedHello();



