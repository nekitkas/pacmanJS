import {LEVEL, OBJECT_TYPE} from "./setup.js";
import field from "./gameField.js";
import Pacman from "./character.js";

const DOMGrid = document.querySelector('#field');
const startBtn = document.querySelector('#start-btn')
const coordinates = document.querySelector('#coordinates')
const test = document.querySelector('#test')

const gameField = field.createGameField(DOMGrid, LEVEL)
const pacman = new Pacman(10, 73)
let lastTime

function gameLoop(time) {
    const delta = time - lastTime
    pacman.div = document.querySelector('.pacman')
    gameField.moveCharacter(pacman)
    test.innerText = pacman.transition
    console.log(`dir :${pacman.currentDir.movement}, nextDir :${pacman.nextDir.movement}`)
    lastTime = time
    requestAnimationFrame(gameLoop)
}

function start() {
    gameField.addObject(73, [OBJECT_TYPE.PACMAN])
    document.addEventListener('keydown', (e) => {
        pacman.handleInput(e, gameField.objectExist.bind(gameField))
    })

    requestAnimationFrame(gameLoop)
}

startBtn.addEventListener('click', start)