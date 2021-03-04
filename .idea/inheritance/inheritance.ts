
export class Animal {
    age:number;
    legs: number;
    name: string;


    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }

    miau(): string {
        return 'miauuu';
    }
}

export class Dog extends Animal {

    woof(): string {
        return 'woof wooofoooow';
    }
}

export class Doggy implements Animal {
    age: number;
    legs: number;
    name: string;

    miau(): string {
        return "";
    }

    woof(): string {
        return 'woof wooofoooow';
    }
}

export class Cat extends Animal {

    constructor(age: number, legs: number, name: string) {
        super(age, legs, name);
    }

    miau(): string {
        super.miau();
        return 'huihui';
    }
}

dog = new Dog(2,4,'gateo');
doggy = new Doggy(2,4,'gateo');
cat = new Dog(4,4,'baby');

console.log(doggy instanceof Animal);
console.log(cat instanceof Animal);

