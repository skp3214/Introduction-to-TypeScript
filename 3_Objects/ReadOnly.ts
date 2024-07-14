interface Person {
    readonly name: string;
    age: number;
}

let person: Person = { name: "John", age: 30 };

// person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
person.age = 31; // This is allowed

console.log(person.age); // Output: 31