let bucketList: string[] = ['Mumbai', 'Groningen', 'Cannes'];
let luckyNumbers: number[] = [9, 3.141, 2.718 ];
let favoritePeople: string[] = ['Schroedinger', 'Nomen Nominandum', 'Michail Bulgakow'];


console.log(bucketList.length, luckyNumbers.length, favoritePeople.length);
for (let i = 0; i < bucketList.length; i++){
    console.log('original:', bucketList[i]);
}
bucketList.unshift('Itajai', 'Oslo', 'Copenhagen');

for (let i = 0; i < bucketList.length; i++){
    console.log('extended:', bucketList[i]);
}


for (const element of luckyNumbers){
    console.log('original:' , element);
}
luckyNumbers.unshift(1219, 1864, 666);
for (const element of luckyNumbers){
    console.log('exended:' , element)
}


for (const element in favoritePeople){
    console.log('original:', favoritePeople[element]);
}
favoritePeople.unshift('Lise Meitner', 'Inge Lehmann', 'Maria Motessori' );
for (const element in favoritePeople){
    console.log('extended:', favoritePeople[element]);
}

console.log(bucketList.length, luckyNumbers.length, favoritePeople.length);
