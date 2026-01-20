const string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";


console.log(string.includes('piper'));
console.log(string.includes('Piper'));
console.log(string.includes('peck', 25));
console.log(string.includes('peck', 0));