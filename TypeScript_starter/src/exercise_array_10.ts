
// create an array with old Hollywood actors
let oldHollywoodActors:string[] = ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor' ,'Cary Grant' ,'Paul Newman' , 'Doris Day'];

for (const element of oldHollywoodActors) {
    console.log('oh ', element)
}

// make a copy by reference of it and add "Marily Monroe"
// show what happend the arrays
let actorsReferece = oldHollywoodActors; 
actorsReferece.push('Marily Monroe');

for (const element of actorsReferece) {
    console.log('ar ',element)
}
for (const element of oldHollywoodActors) {
    console.log('oh ', element)
}

// use concat to make a copy of the old actors array
let concatArray = oldHollywoodActors.concat([]);
for (const element of concatArray) {
    console.log('ca ', element);
}

// use slice to make a copy of the old actors array
let sliceArray = oldHollywoodActors.slice(0, oldHollywoodActors.length);
for (const element of sliceArray) {
    console.log('sla ', element);
}

// use the spread operator to make a copy of the old actors array
let spreadArray = [...oldHollywoodActors]; 
for (const element of spreadArray) {
    console.log('spa ', element);
}

// change a value in each of the copies
spreadArray.splice(1,0,'Humphrey Bogard');
console.log(spreadArray);
console.log(oldHollywoodActors);

sliceArray.splice(1,0, 'Humphrey Bogart');
console.log(sliceArray);
console.log(oldHollywoodActors);

concatArray.splice(1,0,'Humphrey Bogart');
console.log(concatArray);
console.log(oldHollywoodActors);