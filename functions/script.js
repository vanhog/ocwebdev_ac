function intro2(paramName) {
    // outputs paramName to the console
    // params:
    // paramName: string

    let user = paramName;
    if (typeof user === 'string' || user instanceof String) {
        console.log(`My name is ${user}`);
    } else {
        console.log('Please enter a string');
    }
}


function intro3(paramName, paramAge, paramPlace) {
    // outputs paramName to the console
    // params:
    //      paramName: string
    //      paramAge: number
    //      paramPlace: string

    let user = paramName;
    let age = paramAge;
    let place = paramPlace;

    if (isNaN(age)) {
        console.log('Please, enter a number as the age.');
        return;
    }
    if (!(typeof user === 'string' || user instanceof String)) {
        console.log('Please, enter a string as name.');
        return;
    }

    if (!(typeof place === 'string' || place instanceof String)) {
        console.log('Please, enter a string as residence.');
        return;
    } else {
        console.log(`Hello, my name is ${user}. I am ${age} years old. I come from ${place}.`);
    }
    // think, that name and place should be checked against a regular expression
    // assuring, that there is no number in it
}


function math(paramA, paramB) {
    // outputs the sum of
    // params:
    //      paramA: number
    //      paramB: number
    // to the console

    if (!(isNaN(paramA) || isNaN(paramB))) {
        console.log(` ${paramA} x ${paramB} =`, paramA * paramB);
        console.log(` ${paramA} / ${paramB} =`, paramA / paramB);

    } else {
        console.log('Please enter valid numeric data');

    }
}

function theme1() {
    // changes color of background and h1 element
    // according to magic ball 1
    document.body.style.background = '#2a8a53';
    thisH1 = document.getElementsByTagName("h1");
    thisH1[0].style.color = '#670758';
}

function theme2() {
    // changes color of background and h1 element
    // according to magic ball 2
    document.body.style.background = '#474470';
    thisH1 = document.getElementsByTagName("h1");
    thisH1[0].style.color = '#c09e41';
}

function theme3() {
    // changes color of background and h1 element
    // according to magic ball 3
    document.body.style.background = '#00001e';
    thisH1 = document.getElementsByTagName("h1");
    thisH1[0].style.color = '#b05b09';
}

function theme4() {
    // changes color of background and h1 element
    // according to magic ball 4
    document.body.style.background = '#04035c';
    thisH1 = document.getElementsByTagName("h1");
    thisH1[0].style.color = '#38b4da';
}

// some testcases
intro2('Hauge');
intro3('Kjelle', '33.56', 'Copenhagen')
math(10, 2)
math(5, 'A')
math('A', 'B')
math('A', 5.32)
math(6.127, 39.994301)