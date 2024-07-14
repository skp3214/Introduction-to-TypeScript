function buildName(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

console.log(buildName("John")); // Output: John Smith
console.log(buildName("John", "Doe")); // Output: John Doe