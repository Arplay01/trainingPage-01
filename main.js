/* alert('Cześć!') */

console.log('alert')

const createContent = (querySelectorContent, content) => {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}


const zmienna = document.querySelector('.section__heading--orange')
console.log(zmienna);

const createClass = (querySelectorContent, cssClass) =>  {
    const element = document.querySelector(querySelectorContent)
    element.classList.add(cssClass);
}

const toggleClass = (querySelectorContent, cssClass) =>  {
    const element = document.querySelector(querySelectorContent)
    element.classList.toggle(cssClass);
}

const removeClass = (querySelectorContent, removingClass) =>  {
    const element = document.querySelector(querySelectorContent)
    element.classList.remove(removingClass);
}


/* function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
}

createContent('.main__heading--js','Hello World') */

/* const createContent = (querySelectorContent, content) => {
    const element = document.querySelector(querySelectorContent)
    element.innerHTML = content
} */

createContent('.section__footer--description--js', 'Właśnie kończę na dziś (napisane w js)')

/* const JavaScript = 'JavaScript'
const nieJava = JavaScript */

console.log(typeof 2);
console.log(typeof '2');

if ('2' !== 2) {
    console.log('Java to nie Java script');
}

const region = 'Sieradz'

const humanOne = {
    age: 27,
    name: 'Arek',
    girlfriend: {
        girlfriendName: 'Basia',
        girlfriendAge: 30,
        marriage: false,
        region: region,
    }
}
 
const humanTwo = {
    age: 30,
    name: 'Michał',
    girlfriend: {
        girlfriendName: 'Marta',
        girlfriendAge: 28,
        marriage: true,
        region: 'Sieradz',
    }
}

if (humanOne.girlfriend.region == humanTwo.girlfriend.region) {
    console.log(true, `Dziewczyny ${humanOne.name} i  ${humanTwo.name} pochodzą z tego samego regionu`);
}

if (humanOne.age == humanTwo.age) {
    console.log(`${humanOne.name} jest w tym samym wieku co ${humanTwo.name}`)
}

if (humanOne.age !== humanTwo.age) {
    console.log(`${humanOne.name} nie jest w tym samym wieku co ${humanTwo.name}`)
}

if (humanOne.age < humanTwo.age) {
    console.log(`${humanOne.name} jest młodszy od ${humanTwo.name}a`)
}


if (humanOne.age > humanTwo.age) {
    console.log(`${humanOne.name} jest starszy od ${humanTwo.name}a`)
}

if (('2' != 2) || (humanTwo.age == '30')) {
console.log('|| (or) To się wykona');
}

if (('2' !== 2) && (humanTwo.age == '30')) {
    console.log('&& (and) To się też wykona');
    }

    if (!('2' === 2) && !(humanTwo.age === '30')) {
    console.log('! (not) To się też wykona');
    }


if ('2' != 2) {
    console.log('Jeśli jest true to kończy tutaj');
} else if (2 == '2') {
    console.log('else if wyświetla jeżeli jest', false, 'ale spełnia inny określony parametr');
} else {
    console.log('else wyświetla jeżeli jest', false);
}

/* Cała logika idzie od góry do dołu */

/*  zapis skrócony */

(2 < 1) ? console.log('true') : console.log('false w skrócie');

const result = (2 < 1) ? true : 'false ale w jeszcze innym zapisie';
console.log(result) 

/* 
    const button = document.querySelector('.heading__button--js');

    const myClick = () => {
    const element = document.querySelector('.main__heading--js');
    element.innerHTML = 'Hello World'
}

button.addEventListener('click', myClick); */

/* const button = document.querySelector('.heading__button--js');

const myClick = () => {
    createContent('.main__heading--js',`${humanOne.name} loves functions in JS <3`);
    toggleClass('.main__heading--js', 'main__heading');
    createClass('.main__heading--js', 'nowa-klasa-z-js');
}

button.addEventListener('click', myClick); */

const hamburgerMenu = document.querySelector('.hamburger--js');

const hamburgerClick = () => {
    toggleClass('.navigation--js', 'navigation__show');
    toggleClass('.hamburger--js', 'hamburger--open')
}

hamburgerMenu.addEventListener('click', hamburgerClick);

