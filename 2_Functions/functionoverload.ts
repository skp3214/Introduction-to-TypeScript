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