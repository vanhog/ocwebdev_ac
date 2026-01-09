const whereIsSusi = 'Susi is back from codingschool';

let substrings : string[] = [
    whereIsSusi.substring(0,4),
    whereIsSusi.substring(5,7),
    whereIsSusi.substring(24,30)];

// Just for debugging reasons
console.log(substrings);

let totalSubstring : string = '';
substrings.forEach(element => {
    totalSubstring += element + " ";
});

// Jus for debugging reasons
console.log(totalSubstring);

// This does not work:
// document.write(substrings[0]);
// It failes with the following error message
/* 
exercise_strngMthds_04.ts:19 Failed to execute 'write' on 'Document': 
It isn't possible to write into a document from an asynchronously-loaded 
external script unless it is explicitly opened
*/

let resultString : string = '';

substrings.forEach(element => {
    resultString +=`<p>${element}</p>`;
});

resultString += `<p>${totalSubstring}</p>`;

// Write to DOM
document.getElementById('app').innerHTML = resultString;