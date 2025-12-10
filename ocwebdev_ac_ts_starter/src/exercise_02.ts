// Add types to these functions

function calculateTotal(price : number, quantity : number, tax : number) : number {
    return price * quantity * (1 + tax);
}

function greetUser(name : string, greeting : string) : string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

function createUser(name : string, age : number, email : string) : {
        name: string;
        age: number;
        email: string;
    } {
    return {
        name: name,
        age: age || 18,
        email: email
    };
}

// Test your functions
console.log(calculateTotal(10, 3, 0.1));
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Good morning"));
console.log(createUser("Charlie", 25, "charlie@example.com"));
