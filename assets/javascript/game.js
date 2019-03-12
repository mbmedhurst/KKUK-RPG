// generic function for generating random number within a range of two set numbers
function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min)) + min
}

// character set
// my calculations make it difficult for the defender to ever win
// if you want the defender to win, choose Kris as the defender as her strength is set higher
let characters = {
    'Kris': {
        name: 'Kris',
        health: getRandom(200, 100),
        strength: getRandom(40, 10),
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

// this is for the event listener to select players
let characterList = document.querySelectorAll('.playerCell')
let isOver
let me = ""
let defender = ""

// renders all the players on the page
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

// this is the player you choose to play as
const renderMe = _ => {
    document.querySelector('#me').innerHTML = `
    ${me.name} <br />
    ${me.image} <br />
    $${me.health}
    `
}

// this is the player you select as the defender
const renderDefender = _ => {
    document.querySelector('#defender').innerHTML = `
    ${defender.name} <br />
    ${defender.image} <br />
    $${defender.health}
    `
}

// shows attack button on the page
const renderAttackBtn = _ => {
    document.querySelector('#attackBtn').innerHTML = `<button type="button" class="btn btn-danger" id="attack" onclick="attackRound()">Attack</button>`
}

// shows reset button on the page
const renderResetBtn = _ => {
    document.querySelector('#resetBtn').innerHTML =`<button type="button" class="btn btn-secondary" id="reset" onclick="reset()">Reset</button>`
}

// clears buttons from the page
const clearBtns = _ => {
    document.querySelector('#attackBtn').innerHTML = ``
    document.querySelector('#resetBtn').innerHTML = ``
}

// not sure why the reset function is not working - it does not reset all of the health and strength values with new random numbers - better to refresh the page
let reset = _ => {
    isOver = false
    me = ""
    defender = ""
    characters.Kris.health
    characters.Kris.firstStrength.push(characters.Kris.strength)
    characters.Kim.health
    characters.Kim.firstStrength.push(characters.Kim.strength)
    characters.Kourtney.health
    characters.Kourtney.firstStrength.push(characters.Kourtney.strength)
    characters.Khloe.health
    characters.Khloe.firstStrength.push(characters.Khloe.strength)
    document.querySelector('#message').innerHTML = 'Click on an image to choose your character'
    document.querySelector('#me').innerHTML = ''
    document.querySelector('#defender').innerHTML = ''

    clearBtns()
    renderCharacters()
}

// function for when the user attacks the defender
// looking at the sample game, the 'me' player's strengh increases with every attack
// it increases by the orignal strength value that is randomly generated at the beginning of the game
// i capture that amount in the init function and store it in the object as firstStrength
function attack() {
    defender.health -= me.strength
    me.strength += parseInt(me.firstStrength)
}

// function for when the defender counter attacks
// her strength value does not change (which is why it's hard for the defender to win)
function counterAttack() {
    me.health -= defender.strength
}

// this is the core game logic
// this is triggered when the attack button is clicked
function attackRound() {
    if (me.health > 0 && defender.health > 0) {
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
        // condition: if the defender wins
    } else if (me.health <= 0 && defender.health > 0) {
        // it always takes an extra click for the defeat / game over messages to display
        document.querySelector('#message').innerHTML = `GAME OVER! ${defender.name} has defeated you.`
        isOver = true
        renderResetBtn()
        // condition: if the 'me' character wins
    } else if (me.health > 0 && defender.health <= 0) {
        document.getElementById('defender').innerHTML = ``
        // currently there is no logic here to recognize if there are still enemies left to select
        document.querySelector('#message').innerHTML = `You have defeated ${defender.name}.<br /> Please choose another defender.`
        // set value of defender back to null so that a new one can be selected
        defender = ""
        // run the choose players function again to select a new defender
        choosePlayers()
    }
}

const init = _ => {
    isOver = false
    document.querySelector('#me').innerHTML = ''
    document.querySelector('#defender').innerHTML = ''
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

// big shoutout to Katie for helping me with this section
// i wanted to use a single event listener for all four characters
// i copied the forEach syntax here from a stack overflow question/answer
let choosePlayers = _ => {
characterList.forEach(function (elem) {
    elem.addEventListener("click", function (event) {
        //Check if there is me yet and if not then update me to clicked
        if (me === "") {
            //set me equal
            me = characters[elem.id]
            //Assign to grab element ID 
            meDiv = me.name;
            //console logged to make sure it picked a character
            console.log(me)
            //Run render function
            renderMe()
            //Updated html because it looks cool
            document.querySelector("#message").innerHTML = "Pick your opponent!"
            //Update element by ID to empty 
            document.getElementById(meDiv).innerHTML = ``
            //If no defender yet -- set second cicked as defender
        } else if (defender === "") {
            //set defender equal
            defender = characters[elem.id]
            //Assign to grab element ID
            defenderDiv = defender.name
            //run render function
            renderDefender()
            // show attack button
            //update HTML for fun
            document.querySelector("#message").innerHTML = "Let the battle begin!"
            document.getElementById(defenderDiv).innerHTML = ``
            renderAttackBtn()
        }
    });
});
}

choosePlayers()

init()