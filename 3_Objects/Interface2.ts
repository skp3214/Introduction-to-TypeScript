
// Define the input type
interface UserInput {
    username: string;
    isPaid: boolean;
}

// Define the return type
interface UserOutput {
    name: string;
    paid: boolean;
}

// Implement the function
function createnewUser(input: UserInput): UserOutput {
    return {
        name: input.username,
        paid: input.isPaid
    };
}

// Example usage
const userInput: UserInput = {
    username: "JohnDoe",
    isPaid: true
};

const newuserOutput = createnewUser(userInput);
console.log(newuserOutput); // Output: { name: 'JohnDoe', paid: true }

