
# TypeScript
[1. What is TypeScript](#1-what-is-typescript) <br>
[2. Data Types](#2-data-types) <br>
[3. Functions in TypesScript](#functions-in-typescript) <br>
[4. Objects in TypeScript](#objects-in-typescript) <br>
[5. Arrays](#arrays)<br>
[6. Union Types](#union-types)

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
[Back To Top](#typescript)

# Arrays

In TypeScript, arrays are a fundamental data structure used to store multiple values in a single variable. TypeScript builds on JavaScript arrays, adding strong typing to ensure type safety.

### Declaring Arrays

You can declare arrays in TypeScript in a few different ways:

1. **Using square brackets (`[]`):**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
```

2. **Using the `Array` generic type:**

```typescript
let numbers: Array<number> = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

### Multidimensional Arrays

You can also declare multidimensional arrays:

```typescript
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

### Readonly Arrays

If you want to make sure that an array is not modified, you can use `ReadonlyArray`:

```typescript
let readonlyNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// readonlyNumbers.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
```

### Tuples

TypeScript also supports tuples, which are arrays with a fixed number of elements where each element can have a different type:

```typescript
let person: [string, number] = ["Alice", 25];
```

### Array Methods

TypeScript arrays inherit all the methods from JavaScript arrays. Here are some common array methods:

1. **`push` and `pop`:** Add and remove elements from the end of an array.

```typescript
let numbers: number[] = [1, 2, 3];
numbers.push(4); // [1, 2, 3, 4]
numbers.pop();   // [1, 2, 3]
```

2. **`shift` and `unshift`:** Add and remove elements from the beginning of an array.

```typescript
let numbers: number[] = [1, 2, 3];
numbers.unshift(0); // [0, 1, 2, 3]
numbers.shift();    // [1, 2, 3]
```

3. **`map`:** Creates a new array populated with the results of calling a provided function on every element in the calling array.

```typescript
let numbers: number[] = [1, 2, 3];
let doubledNumbers: number[] = numbers.map(n => n * 2); // [2, 4, 6]
```

4. **`filter`:** Creates a new array with all elements that pass the test implemented by the provided function.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let evenNumbers: number[] = numbers.filter(n => n % 2 === 0); // [2, 4]
```

5. **`reduce`:** Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = numbers.reduce((acc, curr) => acc + curr, 0); // 15
```

6. **`forEach`:** Executes a provided function once for each array element.

```typescript
let numbers: number[] = [1, 2, 3];
numbers.forEach(n => console.log(n)); // 1, 2, 3
```

### Type Inference and Arrays

TypeScript can often infer the type of an array if the array is initialized immediately:

```typescript
let numbers = [1, 2, 3]; // TypeScript infers the type as number[]
let mixed = [1, 'two', 3, 'four']; // TypeScript infers the type as (number | string)[]
```

### Union Types with Arrays

You can define arrays that can hold multiple types using union types:

```typescript
let mixed: (number | string)[] = [1, 'two', 3, 'four'];
```

### Accessing Elements

You can access elements in an array using their index:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let firstNumber: number = numbers[0]; // 1
let secondNumber: number = numbers[1]; // 2
```

### Length Property

You can get the number of elements in an array using the `length` property:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let length: number = numbers.length; // 5
```

### Destructuring

You can use array destructuring to extract values from an array:

```typescript
let numbers: number[] = [1, 2, 3];
let [first, second, third] = numbers;
```

[Back To Top](#typescript)

# Union Types
Union types in TypeScript allow a variable to hold more than one type of value. This is useful for situations where a value can be of different types at different times. 

### Declaring Union Types

Union types are declared using the pipe (`|`) symbol between the types.

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

### Using Union Types in Functions

Union types can be used in function parameters and return types.

```typescript
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  } else {
    return `Number: ${input}`;
  }
}

console.log(formatInput("Hello")); // String: Hello
console.log(formatInput(42));      // Number: 42
```

### Arrays with Union Types

Arrays can be declared to hold multiple types using union types.

```typescript
let mixedArray: (string | number)[] = [1, "two", 3, "four"];
```

### Type Guards

Type guards are used to narrow down the type within a union. The most common type guards are `typeof` and `instanceof`.

```typescript
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(`ID (string): ${id.toUpperCase()}`);
  } else {
    console.log(`ID (number): ${id.toFixed(2)}`);
  }
}

printId("myID"); // ID (string): MYID
printId(123.456); // ID (number): 123.46
```

### Union Types and Interfaces

Union types can also be used with interfaces.

```typescript
interface Dog {
  breed: string;
  bark: () => void;
}

interface Cat {
  breed: string;
  meow: () => void;
}

type Pet = Dog | Cat;

function getPet(pet: Pet) {
  console.log(pet.breed);
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const myDog: Dog = { breed: "Labrador", bark: () => console.log("Woof!") };
const myCat: Cat = { breed: "Siamese", meow: () => console.log("Meow!") };

getPet(myDog); // Labrador, Woof!
getPet(myCat); // Siamese, Meow!
```

### Nullable Types

Union types are often used to handle `null` or `undefined`.

```typescript
let name: string | null = "Alice";
name = null;
```

### Union Types in Enums

Union types can be used with enums to restrict possible values.

```typescript
enum ShapeKind {
  Circle = "circle",
  Square = "square",
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case ShapeKind.Circle:
      return Math.PI * shape.radius ** 2;
    case ShapeKind.Square:
      return shape.sideLength ** 2;
  }
}

const myCircle: Circle = { kind: ShapeKind.Circle, radius: 5 };
const mySquare: Square = { kind: ShapeKind.Square, sideLength: 4 };

console.log(getArea(myCircle)); // 78.53981633974483
console.log(getArea(mySquare)); // 16
```

### Combining Union and Intersection Types

Union and intersection types can be combined for more complex type definitions.

```typescript
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp: ElevatedEmployee = {
  name: "Alice",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Universal is number because it's the only type common to both unions.
```

### Key Points

- **Union types** allow a variable to be one of several types.
- **Type guards** help narrow down the type within a union.
- **Interfaces and union types** can be combined for more flexibility.
- **Union types with enums** provide a way to restrict values to specific cases.
- **Nullable types** use union types to handle `null` and `undefined`.
- **Combining union and intersection types** allows for complex type definitions.

Union types in TypeScript provide flexibility while maintaining type safety, enabling you to write robust and maintainable code. If you have specific questions or need further examples, feel free to ask!