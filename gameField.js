import {CELL_SIZE, CLASS_LIST, GRID_SIZE, OBJECT_TYPE} from "./setup.js";

class GameField {
    constructor(DOMGrid) {
        this.DOMGrid = DOMGrid
        this.grid = []
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
        console.log(this.dotCount)
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

    moveCharacter(character) {
        if (character.shouldMove()) {
            const {nextMovePos, direction} = character.getNextMove(this.objectExist.bind(this));
            const {classToRemove, classToAdd} = character.makeMove();
            if (nextMovePos === character.pos) {

            } else if (character.animate()) {
                this.removeObject(character.pos, classToRemove);
                this.grid[character.pos].style.transform = `none`
                this.addObject(nextMovePos, classToAdd);
                character.setNewPos(nextMovePos, document.querySelector('.pacman'))
                if (character.currentDir !== character.nextDir) {
                    let nextMovePos = character.pos + character.nextDir.movement
                    if (!this.objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
                        character.currentDir = character.nextDir
                        character.animate(this.objectExist.bind(this))
                    }
                }
            }
        }
    }

    checkCollision(character, obj) {
        if (this.objectExist(character.pos, obj)) {
            this.removeObject(character.pos, [OBJECT_TYPE.DOT])
            this.dotCount--
            console.log('dot eaten')

        }
    }
}

export default GameField