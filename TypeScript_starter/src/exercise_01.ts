// Add types to these variables
let studentName : string    = "Alice";
let studentAge  : number    = 25;
let isEnrolled  : boolean   = true;
let grades      : number[]  = [95, 87, 92, 88];
let courses     : string[]  = ["Math", "Science", "History"];

// Add types to this object
let student : {id: number, name: string, email: string, gpa: number} = {
    id: 1,
    name: "Alison",
    email: "alison@school.com",
    gpa: 3.8
};

// Create a function that uses these variables
function displayStudent() {
    console.log(`${studentName} is ${studentAge} years old`);
    console.log(`Enrolled: ${isEnrolled}`);
    console.log(`Grades:`, grades);
    // Just to see, if it works like expeted or not
    console.log(`Courses:, ${courses}`);
    console.log(`${student.email}`)
}

displayStudent();