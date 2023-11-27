import {LEVEL, OBJECT_TYPE} from "./setup.js";
import field from "./gameField.js";
import {Ghost, Pacman} from "./character.js";
import {randomMovement} from "./randomMovement.js";

const DOMGrid = document.querySelector('#field');
const startBtn = document.querySelector('#start-btn')

const gameField = field.createGameField(DOMGrid, LEVEL)
gameField.addObject(93, [OBJECT_TYPE.PACMAN])
gameField.addObject(31, [OBJECT_TYPE.BLINKY])
gameField.addObject(28, [OBJECT_TYPE.PINKY])
gameField.addObject(242, [OBJECT_TYPE.INKY])
gameField.addObject(257, [OBJECT_TYPE.CLYDE]) // /2
const pacman = new Pacman('pacman', 5, 93, document.querySelector('.pacman'))
const ghosts = [
    new Ghost('blinky', 5, 31, document.querySelector('.blinky'), randomMovement),
    new Ghost('pinky', 5, 28, document.querySelector('.pinky'), randomMovement),
    new Ghost('inky', 5, 242, document.querySelector('.inky'), randomMovement),
    new Ghost('clyde', 5, 257, document.querySelector('.clyde'), randomMovement)
]


function gameLoop() {
    gameField.moveChar(pacman)
    gameField.checkCollision(pacman, [OBJECT_TYPE.DOT])
    ghosts.forEach((ghost) => {
        gameField.moveChar(ghost)
    })
    requestAnimationFrame(gameLoop)
}

function start() {
    document.addEventListener('keydown', (e) => {
        pacman.handleInput(e, gameField.objectExist.bind(gameField))
    })

    requestAnimationFrame(gameLoop)
}

startBtn.addEventListener('click', start)