type Storage = {
  desk: {
    drawer: string;
  };
  cabinet: {
    'Upper Drawer': {
      Folder1: string;
      Folder2: string;
    };
    'Lower Drawer': string;
  };
};

const ourStorage: Storage = {
  desk: {
    drawer: 'Binder',
  },
  cabinet: {
    'Upper Drawer': {
      Folder1: 'Documents',
      Folder2: 'Secrets',
    },
    'Lower Drawer': 'Glue',
  },
};

console.log(ourStorage.cabinet['Upper Drawer'].Folder2);
console.log(ourStorage.cabinet['Lower Drawer']);
console.log(ourStorage.desk.drawer);
