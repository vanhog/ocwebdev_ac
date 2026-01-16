let bucketList: string[] = ['Mumbai', 'Groningen', 'Cannes'];
let luckyNumbers: number[] = [9, 3.141, 2.718 ];
let favoritePeople: string[] = ['Schroedinger', 'Nomen Nominandum', 'Michail Bulgakow'];


console.log(bucketList.length, luckyNumbers.length, favoritePeople.length);
for (let i = 0; i < bucketList.length; i++){
    console.log(bucketList[i]);
}
console.log('Shift: ', bucketList.shift());

for (let i = 0; i < bucketList.length; i++){
    console.log(bucketList[i]);
}



for (const element of luckyNumbers){
    console.log(element)
}
console.log('Shift: ', luckyNumbers.shift());
for (const element of luckyNumbers){
    console.log(element)
}


for (const element in favoritePeople){
    console.log(favoritePeople[element]);
}
console.log('Shift: ', favoritePeople.shift());
for (const element in favoritePeople){
    console.log(favoritePeople[element]);
}

console.log(bucketList.length, luckyNumbers.length, favoritePeople.length);
