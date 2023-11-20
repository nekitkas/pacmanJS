import {LEVEL, OBJECT_TYPE} from "./setup.js";
import field from "./gameField.js";
import Pacman from "./character.js";

const DOMGrid = document.querySelector('#field');
const startBtn = document.querySelector('#start-btn')
const score = document.querySelector('#score')

const gameField = field.createGameField(DOMGrid, LEVEL)
gameField.addObject(73, [OBJECT_TYPE.PACMAN])
const pacman = new Pacman(5, 73, document.querySelector('.pacman'))

function gameLoop() {
    //pacman.div = document.querySelector('.pacman')
    gameField.moveCharacter(pacman)
    gameField.checkCollision(pacman, [OBJECT_TYPE.DOT])
    requestAnimationFrame(gameLoop)
}

function start() {
    document.addEventListener('keydown', (e) => {
        pacman.handleInput(e, gameField.objectExist.bind(gameField))
    })

    requestAnimationFrame(gameLoop)
}

startBtn.addEventListener('click', start)