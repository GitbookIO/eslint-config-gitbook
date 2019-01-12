/* @flow */

class Somebody {
    name: string;
    age: number;

    sayHello() {
        console.log(`Hello, I'm ${this.name} !`);
    }

    birthday() {
        this.age += 1;
    }
}

export { Somebody };
