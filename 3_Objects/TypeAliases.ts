// Defining a type alias for a person object
type Person = {
    name: string;
    age: number;
    greet(): string;
};

let person: Person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // Output: Hello, my name is John