function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

console.log(buildName("John", "Paul", "Jones")); // Output: John Paul Jones