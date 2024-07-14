let person: { name: string; age: number } = {
    name: "John",
    age: 30
};

console.log(person.name); // Output: John
console.log(person.age);  // Output: 30

// Implement the function
function createUser(input: { username: string, isPaid: boolean }): { name: string, paid: boolean } {
    return {
        name: input.username,
        paid: input.isPaid
    };
}

const userOutput = createUser({username: 'John',isPaid: true});
console.log(userOutput); // Output: { name: 'JohnDoe', paid: true }