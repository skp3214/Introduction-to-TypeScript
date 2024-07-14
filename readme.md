
# TypeScript

[1. What is TypeScript](#1-what-is-typescript)

[2. Data Types](#2-data-types)

[3. Functions](#3-functions)

## 1. What is TypeScript?
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is a free and open-source programming language developed and maintained by Microsoft. TypeScript adds static types to JavaScript, enabling developers to catch errors early and improve code quality.

## 2. Data Types
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

## 3. Functions

### Example 1: Implicit `any` Type
In JavaScript, functions without type annotations implicitly have the `any` type, which can lead to unexpected behavior:

```typescript
// Implicit type is 'any' for this function

function addTwo(num) {
    return num + 2;
}

console.log(addTwo("5"))  // Output: 52
console.log(addTwo(5))    // Output: 7
```

### Example 2: Specifying Parameter Types
By specifying parameter types, TypeScript can help catch errors at compile time:

```typescript
// The implicit type of the function parameter is 'number'
// It means the function expects a number and returns a number.

function subTwo(num: number): number {
    return num - 2;
}

console.log(subTwo(10));  // Output: 8
// console.log(subTwo("5")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Example 3: Explicit Return Types
You can also specify the return type of functions to ensure they return the expected type:

```typescript
// The explicit return type of the function is 'boolean'.
// This means it is necessary to return a boolean value.

let getValue = (myVal: number): boolean => {
    if (myVal > 5) {
        return true;
    } else {
        return false;
    }
}

const heroes = ["thor", "spiderman", "superman"];
let heroLengths = heroes.map((hero): number => {
    return hero.length;
});
let newHeroes = heroes.map((hero): string => {
    return hero.toUpperCase();
});
```

### Example 4: `never` and `void` Types
TypeScript provides `never` and `void` types for specific use cases:

```typescript
// 'void' is used for functions that do not return a value.

function consoleError(errMsg: string): void {
    console.log(errMsg);
}

// 'never' is used for functions that never return, often due to throwing an error.

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}
```

