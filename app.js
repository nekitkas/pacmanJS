import setup from "./setup.js";
import field from "./gameField.js";
import character from "./character.js";

const resetBtn = document.querySelector('#reset');
const position = document.querySelector('#position');
const DOMGrid = document.querySelector('#field');
const startBtn = document.querySelector('#start-btn')

const gameField = field.createGameField(DOMGrid, setup.LEVEL)


function start() {
    const pacman = new character.Pacman(2, 23)
    gameField.addObject(23, [setup.OBJECT_TYPE.PACMAN])
    document.addEventListener('keydown', (e) => {
        pacman.handleInput(e)
    })
}

startBtn.addEventListener('click', start)
gameField.mark()