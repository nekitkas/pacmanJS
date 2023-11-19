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

        level.forEach((square) => {
            const div = document.createElement('div')
            div.classList.add('square', CLASS_LIST[square])
            div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`
            this.DOMGrid.appendChild(div)
            this.grid.push(div)
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

    moveCharacter(character) {
        if (character.shouldMove()) {
            const {nextMovePos, direction} = character.getNextMove(this.objectExist.bind(this));
            const {classToRemove, classToAdd} = character.makeMove();

            if (nextMovePos === character.pos) {

            } else if (character.animate(this.objectExist.bind(this))) {
                this.removeObject(character.pos, classToRemove);
                this.grid[character.pos].style.transform = 'none'
                this.addObject(nextMovePos, classToAdd);
                character.setNewPos(nextMovePos, direction)
                character.setNewDiv(document.querySelector('.pacman'))
                if (character.currentDir !== character.nextDir) {
                    let nextMovePos = character.pos + character.nextDir.movement
                    if (!this.objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
                        //this.nextDir = this.currentDir
                        console.log('change 3')
                        character.currentDir = character.nextDir
                        character.animate(this.objectExist.bind(this))
                    }
                }
            }
            // else {
            //     if (character.dir !== character.nextDirection) {
            //         const nextMovePos = character.pos + character.nextDirection.movement
            //         if (this.objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
            //             console.log('wall')
            //         } else {
            //             character.dir = character.nextDirection
            //         }
            //     }
            // }
        }
    }
}

export default GameField