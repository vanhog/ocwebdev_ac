type Music = {
  artist: string;
  title: string;
  releaseYear: number;
  formats: string[];
  gold: boolean;
};

const myTopFour: Music[] = [
  {
    artist: 'The Beatles',
    title: 'Abbey Road',
    releaseYear: 1969,
    formats: ['LP', 'CD', 'MC', 'Download'],
    gold: true,
  },
  {
    artist: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    releaseYear: 1978,
    formats: ['CS', 'CD', 'LP', 'Download'],
    gold: true,
  },
  {
    artist: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    releaseYear: 1971,
    formats: ['CS', 'LP', 'Download'],
    gold: true,
  },
  {
    artist: 'Metallica',
    title: 'Kill ’Em All and Ride the Lightning',
    releaseYear: 1983,
    formats: ['LP', 'CD', 'MC', 'Download'],
    gold: true,
  },
];

// The Beatles
console.log(myTopFour[0].artist);

// Pink Floyd: 'Download' and 'true'
console.log(myTopFour[1].formats[3]);
console.log(myTopFour[1].gold);

// Led Zeppeling and Metallica 1971 and 1983
console.log(myTopFour[2].releaseYear);
console.log(myTopFour[3].releaseYear);

// Metallica: 'MC' and the word 'ride'
console.log(myTopFour[3].formats[2]);
console.log(myTopFour[3].title.split(' ')[4].toLowerCase());

// Add an artist and display on console
myTopFour[4] = {
  artist: 'Kokoroko',
  title: 'Coiuld We Be More',
  releaseYear: 2022,
  formats: ['CD', 'Download'],
  gold: false,
};

console.log(myTopFour[4]);

// challenge 4: forEach on object
let thisApp = document.getElementById('app');
myTopFour.forEach((element) => {
  let newChild = document.createElement('p');
  newChild.innerText = `${element.artist}, ${element.title}, ${element.formats}`;
  thisApp?.appendChild(newChild);
});

// challenge 4: forEach on object - BONUS
myTopFour.forEach((element) => {
  if (Number(element.releaseYear) < 1975) {
    let newChild = document.createElement('p');
    newChild.innerText = `${element.artist}, ${element.title}, ${element.formats}`;
    thisApp?.appendChild(newChild);
  }
});
