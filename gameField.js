import {CELL_SIZE, CLASS_LIST, eatDot, GRID_SIZE, OBJECT_TYPE,} from "./setup.js";

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

    mark() {
        this.grid.forEach((el, index) => {
            el.innerText = index
            el.style.fontSize = 'small'
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

    moveChar(character) {
        const {nextMovePos, direction} = character.getNextMove(this.objectExist.bind(this));
        const {classesToRemove, classesToAdd} = character.makeMove()
        character.currentDir = direction
        if (nextMovePos === character.pos) {

        } else if (character.animate()) {
            this.removeObject(character.pos, classesToRemove);
            this.grid[character.pos].style.transform = `none`
            this.addObject(nextMovePos, classesToAdd);
            let selector = `.${character.name}`
            character.setNewPos(nextMovePos, document.querySelector(selector))
            if (character.currentDir !== character.nextDir) {
                let nextMovePos = character.pos + character.nextDir.movement
                if (!this.objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
                    character.currentDir = character.nextDir
                    character.animate(this.objectExist.bind(this))
                }
            }
        }

    }

    // moveChar(ghost) {
    //     let {nextMovePos, direction} = ghost.getNextMove(this.objectExist.bind(this))
    //     ghost.currentDir = direction
    //     console.log(nextMovePos)
    //     if (ghost.animate()) {
    //         this.removeObject(ghost.pos, [ghost.name])
    //         this.grid[ghost.pos].style.transform = `none`
    //         this.addObject(nextMovePos, [ghost.name])
    //         let selector = `.${ghost.name}`
    //         ghost.setNewPos(nextMovePos, document.querySelector(selector))
    //     }
    // }

    checkCollision(character, obj) {
        if (this.objectExist(character.pos, obj)) {
            this.removeObject(character.pos, [OBJECT_TYPE.DOT])
            this.dotCount--
            this.score += 50
            document.querySelector('#score').innerText = `Score: ${this.score}`
            eatDot.play()
        }
    }
}

export default GameField