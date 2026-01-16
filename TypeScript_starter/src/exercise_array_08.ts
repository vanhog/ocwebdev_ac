let favoriteTravelDestinations: string[] = ['Mumbai', 'Groningen', 'Cannes']

// add two elements
for (const element of favoriteTravelDestinations) {
    console.log('original: ', element);
}
favoriteTravelDestinations.splice(1,0, 'Copenhagen', 'Itajai')
for (const element of favoriteTravelDestinations) {
    console.log('extended: ', element);
}

// slice two elements
console.log('sliced elements: ', favoriteTravelDestinations.slice(1,2));

// array after slicing
for (const element of favoriteTravelDestinations) {
    console.log('after slicing: ', element);
}

