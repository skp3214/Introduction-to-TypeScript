function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe