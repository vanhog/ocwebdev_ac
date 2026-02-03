type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: 'The Beatles',
    country: 'United Kingdom',
    period_active: { start: 1960, end: 1970 },
    genre: 'Rock / Pop',
  },
  {
    name: 'Elvis Presley',
    country: 'United States',
    period_active: { start: 1954, end: 1977 },
    genre: 'Rock and roll',
  },
  {
    name: 'Michael Jackson',
    country: 'United States',
    period_active: { start: 1964, end: 2009 },
    genre: 'Pop / Rock / Dance / Soul / R&B',
  },
  {
    name: 'Elton John',
    country: 'United Kingdom',
    period_active: { start: 1964, end: 'present' },
    genre: 'Pop / Rock',
  },
  {
    name: 'Madonna',
    country: 'United States',
    period_active: { start: 1979, end: 'present' },
    genre: 'Pop / Dance / Electronica',
  },
  {
    name: 'Led Zeppelin',
    country: 'United Kingdom',
    period_active: { start: 1968, end: 1980 },
    genre: 'Hard rock / Blues rock / Folk rock',
  },
  {
    name: 'Rihanna',
    country: 'United States',
    period_active: { start: 2005, end: 'present' },
    genre: 'R&B / Pop / Dance / Hip-hop',
  },
  {
    name: 'Pink Floyd',
    country: 'United Kingdom',
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: 'Progressive rock / Psychedelic rock',
  },
];

let thisTable = document
  .getElementById('app')
  ?.appendChild(document.createElement('table'));

let colNames: string[] = Object.keys(singers[0]);

let currentRow = thisTable?.appendChild(document.createElement('tr'));

colNames.forEach((element) => {
  let thisTh = document.createElement('th');
  thisTh.innerText = element;
  currentRow?.appendChild(thisTh);
});

singers.forEach((element) => {
  currentRow = thisTable?.appendChild(document.createElement('tr'));
  let currentRowInnerText: string = `<td>${element.name}</td><td>${element.country}</td><td>${element.period_active.start} - ${element.period_active.end} ${element.period_active.extra ? `(extra: ' ${element.period_active.extra})` : ''} </td><td>${element.genre}`;
  currentRow ? (currentRow.innerHTML = currentRowInnerText) : '';
});
