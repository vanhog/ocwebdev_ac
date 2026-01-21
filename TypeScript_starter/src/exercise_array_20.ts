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

function customToUppercase (inString : string) : string {

    return inString.toUpperCase()
}

let upperDrinks : string[] = drinks.map(drink => customToUppercase(drink));
console.log(upperDrinks);


drinks.map(drink => console.log(`I like ${drink}.`));
