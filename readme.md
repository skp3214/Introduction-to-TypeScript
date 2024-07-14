
# TypeScript
[1. What is TypeScript](#1-what-is-typescript) <br>
[2. Data Types](#2-data-types) <br>
[3. Functions in TypesScript](#functions-in-typescript) <br>
[4. Objects in TypeScript](#objects-in-typescript) <br>

# 1. What is TypeScript?
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is a free and open-source programming language developed and maintained by Microsoft. TypeScript adds static types to JavaScript, enabling developers to catch errors early and improve code quality.

# 2. Data Types
TypeScript includes several data types, some of which extend JavaScript's basic types:

- **Number**: Represents numeric values.
- **String**: Represents text values.
- **Boolean**: Represents true/false values.
- **Null**: Represents null values.
- **Undefined**: Represents undefined values.
- **Void**: Represents the absence of any type, commonly used in functions that do not return a value.
- **Object**: Represents non-primitive values.
- **Array**: Represents a collection of values of a specific type.
- **Tuples**: Represents an array with fixed number of elements where each element may have a different type.
- **Any**: Represents any type; used to opt-out of type-checking.
- **Never**: Represents a value that never occurs, often used in functions that always throw an error or never return.
- **Unknown**: Represents any value but requires a type assertion or narrowing before being used.

Sure! Here's a comprehensive guide to functions in TypeScript, covering various aspects such as function types, optional and default parameters, overloads, and more.

[Back To Top](#typescript)

# Functions in TypeScript

## 1. Basic Function Syntax
In TypeScript, you can define functions just like in JavaScript, but with type annotations for parameters and return types.

### Example: Basic Function
```typescript
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(2, 3)); // Output: 5
```

## 2. Function Types
You can define the type of a function by specifying the parameter types and the return type.

### Example: Function Type
```typescript
let myAdd= (x: number, y: number): number => {
    return x + y;
};

console.log(myAdd(5, 7)); // Output: 12
```

## 3. Optional Parameters
You can make parameters optional by using the `?` symbol. Optional parameters must come after required parameters.

### Example: Optional Parameters
```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe
```

## 4. Default Parameters
You can provide default values for parameters, which will be used if no value or `undefined` is passed.

### Example: Default Parameters
```typescript
function buildName(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

console.log(buildName("John")); // Output: John Smith
console.log(buildName("John", "Doe")); // Output: John Doe
```

## 5. Rest Parameters
Rest parameters allow you to pass an arbitrary number of arguments to a function. Rest parameters are specified using the `...` syntax.

### Example: Rest Parameters
```typescript
function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

console.log(buildName("John", "Paul", "Jones")); // Output: John Paul Jones
```

## 6. Function Overloads
Function overloads allow you to define multiple signatures for a function. The function implementation must handle all possible overloads.

### Example: Function Overloads
```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
}

console.log(add(2, 3)); // Output: 5
console.log(add("Hello, ", "world!")); // Output: Hello, world!
```

## 7. Arrow Functions
Arrow functions provide a shorter syntax for writing functions and lexically bind the `this` value.

### Example: Arrow Functions
```typescript
let myAdd = (x: number, y: number): number => {
    return x + y;
};

console.log(myAdd(2, 3)); // Output: 5
```

## 8. `this` in Functions
TypeScript can help you ensure that `this` is used correctly within functions.

### Example: `this` in Functions
```typescript
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("Card: " + pickedCard.card + " of " + pickedCard.suit);
```

## 9. `this` Parameters
You can explicitly declare the type of `this` for functions to avoid errors.

### Example: `this` Parameters
```typescript
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("Card: " + pickedCard.card + " of " + pickedCard.suit);
```
[Back To Top](#typescript)

# Objects in TypeScript

## 1. Basic Object Types
In TypeScript, you can define objects with explicit types to ensure that they have specific properties and types. Here’s how you can define and use objects:

### Example: Basic Object Type
```typescript
// Defining an object with explicit types for its properties
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};

console.log(person.name); // Output: John
console.log(person.age);  // Output: 30
```

## 2. Interfaces
Interfaces in TypeScript are used to define the shape of an object. They provide a way to name these types and make your code more readable and reusable.

### Example: Using Interfaces
```typescript
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
```

## 3. Type Aliases
Type aliases provide a way to name a type, similar to interfaces. They can also be used for more complex types, such as union types.

### Example: Using Type Aliases
```typescript
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
```

## 4. Optional Properties
In TypeScript, properties of objects can be marked as optional using the `?` symbol.

### Example: Optional Properties
```typescript
interface Person {
    name: string;
    age?: number; // age is optional
}

let person1: Person = { name: "John" };
let person2: Person = { name: "Jane", age: 25 };

console.log(person1.age); // Output: undefined
console.log(person2.age); // Output: 25
```

## 5. Readonly Properties
Properties can be marked as `readonly` to prevent modification after the object is created.

### Example: Readonly Properties
```typescript
interface Person {
    readonly name: string;
    age: number;
}

let person: Person = { name: "John", age: 30 };

// person.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
person.age = 31; // This is allowed

console.log(person.age); // Output: 31
```

## 6. Index Signatures
Index signatures allow you to define properties with dynamic keys.

### Example: Index Signatures
```typescript
interface StringDictionary {
    [key: string]: string;
}

let dictionary: StringDictionary = {
    "key1": "value1",
    "key2": "value2"
};

console.log(dictionary["key1"]); // Output: value1
```

## 7. Extending Interfaces
Interfaces can be extended to create new interfaces with additional properties.

### Example: Extending Interfaces
```typescript
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
}

let employee: Employee = {
    name: "John",
    age: 30,
    employeeId: 12345
};

console.log(employee.name); // Output: John
console.log(employee.employeeId); // Output: 12345
```

## 8. Intersection Types
TypeScript allows combining multiple types into one using intersection types (`&`).

### Example: Intersection Types
```typescript
type Person = {
    name: string;
    age: number;
};

type Employee = Person & {
    employeeId: number;
};

let employee: Employee = {
    name: "John",
    age: 30,
    employeeId: 12345
};

console.log(employee.name); // Output: John
console.log(employee.employeeId); // Output: 12345
```

## 9. Classes
TypeScript provides full support for classes, including inheritance, access modifiers, and more.

### Example: Classes
```typescript
class Person {
    constructor(public name: string, public age: number) {}

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name: string, age: number, public employeeId: number) {
        super(name, age);
    }

    getEmployeeId(): number {
        return this.employeeId;
    }
}

let employee = new Employee("John", 30, 12345);
console.log(employee.greet()); // Output: Hello, my name is John
console.log(employee.getEmployeeId()); // Output: 12345
```
