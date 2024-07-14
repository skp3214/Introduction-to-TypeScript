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