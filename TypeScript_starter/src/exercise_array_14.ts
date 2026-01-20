/**
 * Reverts a string character by character
 *
 * @param inString - the string to be reverted
 * @returns - a new string made of inString read from behind
*/

function stringRev(inString:string):string {

    let result : string = ' ';
    
    for (let i:number = inString.length-1; i>=0; i--) {
        result += inString[i];    
    }
    return result;
}

console.log(stringRev('!edoc gnitirw peek ,taerg era uoY'));

