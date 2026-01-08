let oceanQuote : string = "Blue, green, gray, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."


console.log(`The character ";" can be found at position ${oceanQuote.search(';')}`);
console.log(`The word "green" can be found at position ${oceanQuote.search('green')}.`);
console.log(`The character sequence "blue" can be found at position ${oceanQuote.search('blue')}.`); // Result is -1, because the sentence starts with "Blue"

let quote : string = "How inappropriate to call this planet Earth, when it's quite clearly Ocean"; //Btw.: Wonderful quote! 
console.log(quote.search('h'));