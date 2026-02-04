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

function populateTable(inSingers: Singer[], inHook: string) {
  let checkTable = document.getElementById('singersTable');

  if (checkTable) {
    document.getElementById(inHook)?.removeChild(checkTable);
  }
  let thisTable = document
    .getElementById(inHook)
    ?.appendChild(document.createElement('table'));
  if (thisTable) {
    thisTable.id = 'singersTable';
  }

  let colNames: string[] = Object.keys(inSingers[0]);

  let currentRow = thisTable?.appendChild(document.createElement('tr'));

  colNames.forEach((element) => {
    let thisTh = document.createElement('th');
    thisTh.innerText = element;
    currentRow?.appendChild(thisTh);
  });

  inSingers.forEach((element) => {
    currentRow = thisTable?.appendChild(document.createElement('tr'));
    let currentRowInnerText: string = `<td>${element.name}</td><td>${element.country}</td><td>${element.period_active.start} - ${element.period_active.end} ${element.period_active.extra ? `(extra: ' ${element.period_active.extra})` : ''} </td><td>${element.genre}`;
    currentRow ? (currentRow.innerHTML = currentRowInnerText) : '';
  });
}

document.getElementById('name')?.addEventListener('click', () => {
  let sortedArray: Singer[] = singers.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  populateTable(sortedArray, 'app');
});

document.getElementById('country')?.addEventListener('click', () => {
  let sortedArray: Singer[] = singers.sort((a, b) => {
    if (a.country.toLowerCase() < b.country.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  populateTable(sortedArray, 'app');
});

document.getElementById('start')?.addEventListener('click', () => {
  let sortedArray: Singer[] = singers.sort(
    (a, b) => Number(a.period_active.start) - Number(b.period_active.start),
  );
  populateTable(sortedArray, 'app');
});

document.getElementById('end')?.addEventListener('click', () => {
  let sortedArray: Singer[] = singers.sort(
    (a, b) => Number(a.period_active.end) - Number(b.period_active.end),
  );
  populateTable(sortedArray, 'app');
});

document.getElementById('genre')?.addEventListener('click', () => {
  let sortedArray: Singer[] = singers.sort((a, b) => {
    if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
  populateTable(sortedArray, 'app');
});

populateTable(singers, 'app');
