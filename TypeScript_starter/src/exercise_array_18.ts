const artworks : string[] = [
"Starry Night - Vincent van Gogh",
"Guernica - Pablo Picasso",
"The Birth of Venus - Sandro Botticelli",
"The Night Watch - Rembrandt",
"Mona Lisa - Leonardo da Vinci",
"The Potato Eaters - Vincent van Gogh",
"The Scream - Edvard Munch",
"The Last Supper - Leonardo da Vinci",
"The Annunciation - James Tissot",
"The Garden of Earthly Delights - Hieronymus Bosch"
];

const artworkDates : string[] = [
"Starry Night - 1889",
"Guernica - 1937",
"The Birth of Venus - 1486",
"The Night Watch - 1642",
"Mona Lisa - 1503",
"The Potato Eaters - 1885",
"The Scream - 1893",
"The Last Supper - 1495",
"The Annunciation - 1885",
"The Garden of Earthly Delights - 1505"]

/**
 * Checks weather an artwork is found in the data for
 * a: artworks and
 * b: artworkDates
 * If found, it returns a string, saying when the
 * artwork was painted an by whom
 * 
 * @param artworkName - the name the artwork
 * @returns - result string with detailed info or error message
*/

function artworkInfo(artworkName : string) : string {

    let matchArtwork : string = '';
    let matchArtworkDate : string = '';

    for (let element of artworkDates) {
        if (element.includes(artworkName)){
            matchArtworkDate = element.split('-')[1].trim();
        }
    }
    for (let element of artworks) {
        if (element.includes(artworkName)){
            matchArtwork = element.split('-')[1].trim();
        }
    }

    if (Boolean(matchArtwork) && Boolean(matchArtworkDate)){
        return`${artworkName} was painted by ${matchArtwork} in the year ${matchArtworkDate}`;
    } else {
        return `Artwork ${artworkName} not found`;
    }

}

// testcase
console.log(artworkInfo("Mona Lisa"));
