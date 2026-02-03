type PreciousMetalPrice = {
  name: string;
  pricePerGramEuro: number;
  change: string;
};

const preciousMetalPrices: PreciousMetalPrice[] = [
  { name: 'Gold', pricePerGramEuro: 42.91, change: '+0.12%' },
  { name: 'Silver', pricePerGramEuro: 0.51, change: '+1.02%' },
  { name: 'Platinum', pricePerGramEuro: 25.74, change: '+0.41%' },
  { name: 'Palladium', pricePerGramEuro: 50.93, change: '0.00%' },
  { name: 'Rhodium', pricePerGramEuro: 160.12, change: '-0.10%' },
  { name: 'Iridium', pricePerGramEuro: 42.84, change: '0.00%' },
  { name: 'Ruthenium', pricePerGramEuro: 7.36, change: '0.00%' },
  { name: 'Rhenium', pricePerGramEuro: 37.22, change: '-0.53%' },
  { name: 'Osmium', pricePerGramEuro: 11.54, change: '0.00%' },
];

// Use forEach() to access all name values and push them into a new array.
let newArray: string[] = [''];

preciousMetalPrices.forEach((element) => {
  newArray.push(element.name);
});

console.log(newArray);

// Use map() to access all name values.
let newArray2: string[] = preciousMetalPrices.map((a) => a.name);

console.log(newArray2);

// Use forEach() to access all pricePerGramEuro values and push them into a new array.
let newArray3: number[] = [];

preciousMetalPrices.forEach((element) => {
  newArray3.push(element.pricePerGramEuro);
});

console.log(newArray3);

// Use map() to access all pricePerGramEuro values
let newArray4: number[] = preciousMetalPrices.map((a) => a.pricePerGramEuro);
console.log(newArray4);

// Use forEach() to access all change values and push them into a new array.
let newArray5: number[] = [];

preciousMetalPrices.forEach((element) => {
  newArray5.push(element.pricePerGramEuro * 21.5);
});

console.log(newArray5);

// Use map() to access all change values.
let newArray6: number[] = preciousMetalPrices.map(
  (a) => a.pricePerGramEuro * 21.5,
);
console.log(newArray6);

// Use filter() to access the pricePerGramEuro values that are greater than 50 euros.

let newArray7 = preciousMetalPrices.filter((a) => a.pricePerGramEuro > 50);
console.log(newArray7);

// What do you notice when you compare both methods and stop using push()?
// map/filter just need one single line of code
// they create a new array

let myTable = document
  .getElementById('app')
  ?.appendChild(document.createElement('table'));

let headerRow = myTable?.appendChild(document.createElement('tr'));

let colNames: string[] = ['Name', 'Price per gram (€)', 'Change'];

colNames.forEach((element) => {
  let thisDivider = document.createElement('th');
  thisDivider.innerText = element;
  headerRow?.appendChild(thisDivider);
});

let keys = ['name', 'pricePerGramEuro', 'change'];
preciousMetalPrices.forEach((element) => {
  let dataRow = myTable?.appendChild(document.createElement('tr'));
  for (const v of Object.values(element)) {
    let thisDivider = document.createElement('td');
    thisDivider.innerText = String(v);
    dataRow?.appendChild(thisDivider);
  }
});
