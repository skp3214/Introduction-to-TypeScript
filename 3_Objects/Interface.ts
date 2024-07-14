// Defining an interface for a person object
interface Person {
    name: string;
    age: number;
    greet(): string;
}

// Implementing the interface in an object
let person: Person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // Output: Hello, my name is John