import {CELL_SIZE, CLASS_LIST, GRID_SIZE, OBJECT_TYPE} from "./setup.js";

class GameField {
    constructor(DOMGrid) {
        this.DOMGrid = DOMGrid
        this.grid = []
        this.score = 0
    }

    static createGameField(DOMGrid, level) {
        const field = new this(DOMGrid)
        field.#createGrid(level)
        return field
    }

    #createGrid(level) {
        this.DOMGrid.innerHTML = ''
        this.DOMGrid.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`
        this.grid = []
        this.dotCount = 0

        level.forEach((square) => {
            const div = document.createElement('div')
            div.classList.add('square', CLASS_LIST[square])
            div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`
            this.DOMGrid.appendChild(div)
            this.grid.push(div)

            if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++
        })
    }

    addObject(pos, obj) {
        this.grid[pos].classList.add(...obj)
    }

    objectExist(pos, object) {
        return this.grid[pos].classList.contains(object)
    }

    removeObject(pos, object) {
        this.grid[pos].classList.remove(...object)
    }

    movePacman(pacman) {
        const {nextMovePos, direction} = pacman.getNextMove(this.objectExist.bind(this));
        pacman.currentDir = direction
        if (nextMovePos === pacman.pos) {

        } else if (pacman.animate()) {
            this.removeObject(pacman.pos, [OBJECT_TYPE.PACMAN]);
            this.grid[pacman.pos].style.transform = `none`
            this.addObject(nextMovePos, [OBJECT_TYPE.PACMAN]);
            pacman.setNewPos(nextMovePos, document.querySelector('.pacman'))
            if (pacman.currentDir !== pacman.nextDir) {
                let nextMovePos = pacman.pos + pacman.nextDir.movement
                if (!this.objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
                    pacman.currentDir = pacman.nextDir
                    pacman.animate(this.objectExist.bind(this))
                }
            }
        }

    }

    moveGhost(ghost) {
        let {nextMovePos, direction} = ghost.getNextMove(this.objectExist.bind(this))
        ghost.currentDir = direction
        console.log(nextMovePos)
        if (ghost.animate()) {
            this.removeObject(ghost.pos, [OBJECT_TYPE.BLINKY])
            this.grid[ghost.pos].style.transform = `none`
            this.addObject(nextMovePos, [OBJECT_TYPE.BLINKY])
            ghost.setNewPos(nextMovePos, document.querySelector('.blinky'))
        }
    }

    checkCollision(character, obj) {
        if (this.objectExist(character.pos, obj)) {
            this.removeObject(character.pos, [OBJECT_TYPE.DOT])
            this.dotCount--
            this.score += 50
            document.querySelector('#score').innerText = `Score: ${this.score}`
            //  eatDot.play()
        }
    }
}

export default GameField