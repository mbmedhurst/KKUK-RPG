// generic function for generating random number within a range of two set numbers
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

// character set
let characters = {
    'Kris': {
        name: 'Kris',
        health: getRandom(200, 100),
        strength: getRandom(20, 1),
        firstStrength: [], // placholder to capture the initial value of the character's strength
        image: '<img src="./assets/images/kris.jpg">'
    },

    'Kim': {
        name: 'Kim',
        health: getRandom(200, 100),
        strength: getRandom(20, 1),
        firstStrength: [],
        image: '<img src="./assets/images/kim.jpg">'
    },

    'Kourtney': {
        name: 'Kourtney',
        health: getRandom(200, 100),
        strength: getRandom(20, 1),
        firstStrength: [],
        image: '<img src="./assets/images/kourtney.jpg">'
    },

    'Khloe': {
        name: 'Khloe',
        health: getRandom(200, 100),
        strength: getRandom(20, 1),
        firstStrength: [],
        image: '<img src="./assets/images/khloe.jpg">'
    },
}

let characterList = document.querySelectorAll('.playerCell')
let isOver
let me = characters[name]
let defender = characters['Kim']


const renderCharacters = _ => {
    document.querySelector('#Kris').innerHTML = `
    ${characters.Kris.name} <br />
    ${characters.Kris.image} <br />
    $${characters.Kris.health}
    `
    document.querySelector('#Kim').innerHTML = `
    ${characters.Kim.name} <br />
    ${characters.Kim.image} <br />
    $${characters.Kim.health}
    `
    document.querySelector('#Kourtney').innerHTML = `
    ${characters.Kourtney.name} <br />
    ${characters.Kourtney.image} <br />
    $${characters.Kourtney.health}
    `

    document.querySelector('#Khloe').innerHTML = `
    ${characters.Khloe.name} <br />
    ${characters.Khloe.image} <br />
    $${characters.Khloe.health}
    `
}

const renderMe = _ => {
    document.querySelector('#me').innerHTML = `
    ${me.name} <br />
    ${me.image} <br />
    $${me.health}
    `
}
const renderDefender = _ => {
    document.querySelector('#defender').innerHTML = `
    ${defender.name} <br />
    ${defender.image} <br />
    $${defender.health}
    `
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
    document.querySelector('#me').innerHTML = `
    ${me.name} <br />
    ${me.image} <br />
    $${me.health}
    `
    document.querySelector('#defender').innerHTML = `
    ${defender.name} <br />
    ${defender.image} <br />
    $${defender.health}
    `
    document.querySelector('#message').innerHTML =
        `You attacked ${defender.name} which cost her $${me.strength - me.firstStrength}.<br />
        She attacked you back, which cost you $${defender.strength}.`
}


const init = _ => {
    isOver = false
    characters.Kris.health
    characters.Kris.firstStrength.push(characters.Kris.strength)
    characters.Kim.health
    characters.Kim.firstStrength.push(characters.Kim.strength)
    characters.Kourtney.health
    characters.Kourtney.firstStrength.push(characters.Kourtney.strength)
    characters.Khloe.health
    characters.Khloe.firstStrength.push(characters.Khloe.strength)
    document.querySelector('#message').innerHTML = 'Click on an image to choose your character'
    
    renderCharacters()
}

characterList.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
        me = characters[elem.id]
        renderMe()
    })
})

init()