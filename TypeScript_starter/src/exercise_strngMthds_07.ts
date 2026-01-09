const infoAboutSam : string = "Sam is going to coding school";
const susi : string = "Susi"; 
const and : string = "and";

let resultString : string = ' ';

// Sam is going to school and to the movie theater
let partString : string = infoAboutSam.replace(' coding','');
resultString = partString.concat(' ' + and + ' to the movie theater.');
resultString = '<p>' + resultString + '</p>';

// Sam is going to the movie theater
resultString += '<p>' 
    + partString.replace('to school', '').concat('to the movie theater') 
    + '</p>';

// Susi and Sam are going to school
resultString += '<p>' 
    + partString.replace('Sam is', susi.concat(' and Sam are')) 
    + '</p>';

// Susi and Sam are going to th gym and to the movie theater
resultString += '<p>' 
    + partString.replace('Sam is', susi.concat(' and Sam are')).replace('school', 'the gym ').concat(and) 
    + ' to the movie theater.'
    + '</p>';

// Susi is going to school and to the movie theater
resultString += '<p>' 
    + partString.concat(' ' + and + ' to the movie theater.').replace('Sam', susi)
    + '</p>';

// Write to DOM
document.getElementById('app').innerHTML = resultString;
