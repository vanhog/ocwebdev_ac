const samsStatus : string = "Sam is good at coding school";

let resultString : string = ' ';

// I'm sure, there are better strategies, but it should be okay for exploring the
// possibilities of "replace", shouldn't it?
resultString += `<p>${samsStatus.replace('good at coding', 'bad at')}</p>`;
resultString += `<p>${samsStatus.replace('Sam is good at coding', 'Susi is good at')}</p>`;
resultString += `<p>${samsStatus.replace('coding school', 'tennis')}</p>`;

// Write to DOM
document.getElementById('app').innerHTML = resultString;

