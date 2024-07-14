interface Person {
    name: string;
    age?: number; // age is optional
}

let person1: Person = { name: "John" };
let person2: Person = { name: "Jane", age: 25 };

console.log(person1.age); // Output: undefined
console.log(person2.age); // Output: 25