const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

function imageFileParser(imageFileName:string) : string {
    const dotPos : number = imageFileName.indexOf('.');
    if (dotPos === -1) {
        return 'invalid';
    } else {
        return imageFileName.slice(0,dotPos).toLowerCase();
    }
    
}

let albumNames : string[] = album.map(imageFileParser);

console.log(albumNames);
