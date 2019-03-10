// generic function for generating random number within a range of two set numbers
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

let characterList = document.querySelectorAll('.playerCell');

// let me = characters[name]
// let defender = characters[name]

// character set
let characters = {
    'kris': {
        name: 'kris',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [], // placholder to capture the initial value of the character's strength
    },

    'kim': {
        name: 'kim',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },

    'kourtney': {
        name: 'kourtney',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },

    'khloe': {
        name: 'khloe',
        health: getRandom(20, 10),
        strength: getRandom(5, 1),
        firstStrength: [],
    },
}

function attack() {
    defender.health -= me.strength
    me.strength += parseInt(me.firstStrength)
}

function counterAttack() {
    me.health -= defender.strength
}

function attackRound() {
    attack()
    // counterAttack()
    let me = 'kris'
    let defender = "kim"
    document.querySelector('#krisHS').innerHTML = `$${me.health}`
    document.querySelector('#kimHS').innerHTML = `$${defender.health}`
    document.querySelector('#message').innerHTML =
        `You attacked {defender} which cost her {this.health}.She attacked you back, which cost you {this.health}.`
}

//***************** GAME STARTS ***************************/

// listens for clicks on any of the 4 characters on the page
// got this from stack overflow https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line)
characterList.forEach(function(elem) {
    elem.addEventListener("click", function() {
        alert('hello world')
    });
});


function init() {
    characters.kris.health
    characters.kris.firstStrength.push(characters.kris.strength)
    characters.kim.health
    characters.kim.firstStrength.push(characters.kim.strength)
    characters.kourtney.health
    characters.kourtney.firstStrength.push(characters.kourtney.strength)
    characters.khloe.health
    characters.khloe.firstStrength.push(characters.khloe.strength)
    document.querySelector('#message').innerHTML = 'Click on an image to choose your character'
    document.querySelector('#krisHS').innerHTML = `$ ${characters.kris.health}`
    document.querySelector('#kimHS').innerHTML = `$ ${characters.kim.health}`
    document.querySelector('#kourtneyHS').innerHTML = `$ ${characters.kourtney.health}`
    document.querySelector('#khloeHS').innerHTML = `$ ${characters.khloe.health}`
}

init()