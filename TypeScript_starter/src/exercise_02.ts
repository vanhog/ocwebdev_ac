interface IStudent {
    name : string;
    age : number; 
    email : string;
}
// Add types to these functions

let sampkkkkk : IStudent;

function calculateTotal(price : number, quantity : number, tax : number) : number {
    return price * quantity * (1 + tax);
}

function greetUser(name : string, greeting : string) : string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

function createUser(inStud : IStudent) : {
        name: string;
        age: number;
        email: string;
    } {
    return {
        name: inStud.name,
        age: inStud.age || 18,
        email: inStud.email
    };
}

// Test your functions
console.log(calculateTotal(10, 3, 0.1));
console.log(greetUser("Alice"));
console.log(greetUser("Bob", "Good morning"));
console.log(createUser("Charlie", 25, "charlie@example.com"));
