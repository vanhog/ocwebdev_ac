const languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

/**
 * Sorts an array alphabetically
 *
 * @param inArray - array to be sorted alphabetically
 * @returns - reference to the sorted inArray
*/

function arrSort(inArray:string[]):string[] {


    return inArray.sort();

}

// Testcase
console.log(arrSort(languages));
