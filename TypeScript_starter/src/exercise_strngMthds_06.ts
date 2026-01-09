const whereIsSam : string = "Sam is going to school";

let resultString : string = ' ';

// SAM IS GOING TO SCHOOL
resultString += `<p>${whereIsSam.toUpperCase()}</p>`;

// SAM is going to SCHOOL
let repResult : string = whereIsSam.replace('Sam', "Sam".toUpperCase());
repResult = repResult.replace('school', "school".toUpperCase());
resultString += `<p>${repResult}</p>`;

// sam IS GOING TO school
repResult = whereIsSam.toUpperCase();
repResult = repResult.replace('SAM', "SAM".toLowerCase());
repResult = repResult.replace('SCHOOL', "SCHOOL".toLowerCase());
resultString += `<p>${repResult}</p>`;

// Sam Is Going To School
let splitString : string[] = whereIsSam.split(' ');
let reSplitString : string = '';

splitString.forEach((element) => {
  reSplitString += element.replace(element[0], element[0].toUpperCase())+' ';
});

resultString += `<p>${reSplitString}</p>`;

// Write to DOM
document.getElementById('app').innerHTML = resultString;

