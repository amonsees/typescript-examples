class ReferenceClass {
    constructor(public message: string) { }

    sayHello() {
        if (this) {
            if ((this as any).document) {
                console.log(`Hello window!`)
            } else {
                console.log(`Hello ${this.message}`);
            }
        } else {
            console.log('Hello [this is undefined]');
        }
    }

    // Invalid
    delayedHello() {
        setTimeout(this.sayHello, 100);
    }

    // Valid
    instanceFunctionHello() {
        setTimeout(() => {
            this.sayHello()
        }, 120);
    }

    // Valid
    functionBindHello() {
        setTimeout(this.sayHello.bind(this), 140);
    }

    // Always safe
    wrappedHello = () => {
        this.sayHello();
    }
}

new ReferenceClass('Standard').sayHello();
new ReferenceClass('Invalid - window').delayedHello();

new ReferenceClass('Instance Function').instanceFunctionHello();
new ReferenceClass('Function Bind').instanceFunctionHello();

// Straight timeout
setTimeout(new ReferenceClass('Wrapped Delay').wrappedHello, 160);

new ReferenceClass('Wrapped Delay').wrappedHello();

