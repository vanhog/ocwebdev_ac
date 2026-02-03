type Pet = {
  animal_type: string;
  names: string[];
};

const ourPets: Pet[] = [
  {
    animal_type: 'Cat',
    names: ['Gipsy', 'Nala', 'Dinky'],
  },
  {
    animal_type: 'Dog',
    names: ['Knöpfchen', 'Pinselchen', 'Droopy'],
  },
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[2]);

console.log(ourPets[1].names);

ourPets[0].names[2] = 'Pinky';
ourPets[1].names[2] = 'Snoopy';

console.log(ourPets[0].names, ourPets[1].names);

ourPets[2] = {
  animal_type: 'Hamster',
  names: ['Pebble', 'Sackerl', 'Schnuffi'],
};

console.log(ourPets[2]);
