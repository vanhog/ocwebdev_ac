// create an array with theses three values 23, 54, 75
let myNumbers: number[] = [23, 54, 75];
for (const element of myNumbers) {
    console.log('before push: ', element)
}


// add five values using 'push' -> at the end
myNumbers.push(5, 6, 7, 8, 9);
for (const element of myNumbers) {
    console.log('after push: ', element)
}


// add five values using 'unshift' -> at the beginning
myNumbers.unshift(199, 198, 197, 196, 195);
for (const element of myNumbers) {
    console.log('after shift: ', element)
}


// use two times 'pop'
for (let i = 0; i < 2; i++) {
    myNumbers.pop();
}
for (const element of myNumbers) {
    console.log('after 2 x pop: ', element)
}


// use two times 'shift'
for (let i = 0; i < 2; i++) {
    myNumbers.shift();
}
for (const element of myNumbers) {
    console.log('after 2 x shift: ', element)
}
