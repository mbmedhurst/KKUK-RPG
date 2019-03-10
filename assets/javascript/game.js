// generic function for generating random number within a range of two set numbers
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

let characterList = document.querySelectorAll('.playerCell');

// character set
let characters = {
    'Kris': {
        name: 'Kris',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [], // placholder to capture the initial value of the character's strength
    },

    'Kim': {
        name: 'Kim',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },

    'Kourtney': {
        name: 'Kourtney',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },

    'Khloe': {
        name: 'Khloe',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },
}

let me = characters['Kris']
let defender = characters['Kim']

function chooseMe() {
    // move chosen player to correct position
}

function attack() {
    defender.health -= me.strength
    me.strength += parseInt(me.firstStrength)
    console.log(me.strength)
}

function counterAttack() {
    me.health -= defender.strength
}

function attackRound() {
    attack()
    counterAttack()
    document.querySelector('#krisHS').innerHTML = `$ ${me.health}`
    document.querySelector('#kimHS').innerHTML = `$ ${defender.health}`
    document.querySelector('#message').innerHTML =
        `You attacked ${defender.name} which cost her $${me.strength}.<br />
        She attacked you back, which cost you $${defender.strength}.`
}

//***************** GAME STARTS ***************************/

// listens for clicks on any of the 4 characters on the page
// got this from stack overflow https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line)
characterList.forEach(function (elem) {
    elem.addEventListener("click", function () {
        alert('hello world')
        console.log(elem)
    });
});


function init() {
    characters.Kris.health
    characters.Kris.firstStrength.push(characters.Kris.strength)
    console.log(characters.Kris.firstStrength)
    characters.Kim.health
    characters.Kim.firstStrength.push(characters.Kim.strength)
    console.log(characters.Kim.firstStrength)
    characters.Kourtney.health
    characters.Kourtney.firstStrength.push(characters.Kourtney.strength)
    characters.Khloe.health
    characters.Khloe.firstStrength.push(characters.Khloe.strength)
    document.querySelector('#message').innerHTML = 'Click on an image to choose your character'
    document.querySelector('#krisHS').innerHTML = `$ ${characters.Kris.health}`
    document.querySelector('#kimHS').innerHTML = `$ ${characters.Kim.health}`
    document.querySelector('#kourtneyHS').innerHTML = `$ ${characters.Kourtney.health}`
    document.querySelector('#khloeHS').innerHTML = `$ ${characters.Khloe.health}`
}

init()