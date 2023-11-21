import {LEVEL, OBJECT_TYPE} from "./setup.js";
import field from "./gameField.js";
import {Ghost, Pacman} from "./character.js";

const DOMGrid = document.querySelector('#field');
const startBtn = document.querySelector('#start-btn')

const gameField = field.createGameField(DOMGrid, LEVEL)
gameField.addObject(73, [OBJECT_TYPE.PACMAN])
gameField.addObject(31, [OBJECT_TYPE.BLINKY])
const pacman = new Pacman('pacman', 5, 73, document.querySelector('.pacman'))
const blinky = new Ghost('blinky', 13, 31, document.querySelector('.blinky'))

function gameLoop() {
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