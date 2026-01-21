const drinks: string[] = [
    "Coca-Cola",
    "Apple juice",
    "Pepsi",
    "Grape juice",
    "Sprite",
    "Orange juice",
    "Red Bull Energy Drink",
    "Fanta"
];

let htmlString : string = '';

drinks.forEach(element => {
    console.log(element);
    htmlString += `<p>${element}</p>`;
});

const outDiv: HTMLElement | null = document.getElementById('app');

if (outDiv) {
    outDiv.innerHTML = htmlString;
} 