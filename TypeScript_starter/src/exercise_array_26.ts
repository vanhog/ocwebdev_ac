const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first way
function isEvenNumber(inNumber: number) {
  return inNumber % 2 === 0;
}

function isOddNumber(inNumber: number) {
  return inNumber % 2 != 0;
}

// loop just for debugging reasons
for (let i = 0; i <= numbers.length; i++) {
  console.log(isEvenNumber(numbers[i]));
}

// logs
console.log(numbers.filter(isEvenNumber));
console.log(numbers.filter(isOddNumber));

// second way
function printEvenNumbers(inNumbers: number[]): number[] {
  return inNumbers.filter((element) => element % 2 === 0);
}
console.log(printEvenNumbers(numbers));

function printOddNumbers(inNumbers: number[]): number[] {
  return inNumbers.filter((element) => element % 2 != 0);
}
console.log(printOddNumbers(numbers));
