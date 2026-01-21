const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];


function fahrenheitToCelsius(inFahrenheit : number) : number {
    return (inFahrenheit -32) / 1.8;
}

let celsius : number[] = fahrenheit.map(temp => fahrenheitToCelsius(temp));

console.log(celsius);

