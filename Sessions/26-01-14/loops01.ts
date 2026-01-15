const numbers: number [] = [3,7,9,2,5];
const names: string[] = ['Ada', 'Grace', 'Yolanda'];

const user = [{id:1, name: 'Ada', active: true},{id:2, name:'Grace', active: false}];

let sum = 0;

for(let i=0; i < numbers.length; i++) {
    sum +=numbers[i];
}

console.log(sum);

for (const element in names) {
    console.log(element, names[element]);
}


// while (runs eventually never)

// Do (at least once)