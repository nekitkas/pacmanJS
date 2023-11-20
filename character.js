import {DIRECTIONS, OBJECT_TYPE} from "./setup.js";

class Character {

    constructor(speed, pos, div) {
        this.speed = speed
        this.pos = pos
        this.currentDir = DIRECTIONS.d
        this.nextDir = DIRECTIONS.d
        this.div = div
        this.transition = 0
    }
}

class Pacman extends Character {
    getNextMove(objectExist) {
        let nextMovePos = this.pos + this.currentDir.movement
        if (objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
            nextMovePos = this.pos
        }
        return {nextMovePos, direction: this.currentDir}
    }

    shouldMove() {
        return this.currentDir !== null;
    }


    animate() {
        if (this.transition < 100) {
            switch (this.currentDir.movement) {
                case DIRECTIONS.a.movement:
                    this.div.style.transform = `translateX(${-this.transition}%)`
                    break
                case DIRECTIONS.d.movement:
                    this.div.style.transform = `translateX(${this.transition}%)`
                    break
                case DIRECTIONS.w.movement:
                    this.div.style.transform = `translateY(${-this.transition}%)`
                    break
                case DIRECTIONS.s.movement:
                    this.div.style.transform = `translateY(${this.transition}%)`
                    break
            }
            this.transition += this.speed
            return false
        } else {
            this.transition = 0
            return true
        }
    }


    handleInput = (e, objectExist) => {
        let dir;

        switch (e.key) {
            case 'a':
            case 's':
            case 'd':
            case 'w':
                dir = DIRECTIONS[e.key]
                break
            default:
                return;
        }
        if (this.transition === 0) {
            const nextMovePos = this.pos + dir.movement;
            if (objectExist(nextMovePos, OBJECT_TYPE.WALL)) {
            } else {
                this.currentDir = dir;
                this.nextDir = dir
            }
        } else {
            this.nextDir = dir
        }
    }

    makeMove() {
        const classToRemove = [OBJECT_TYPE.PACMAN]
        const classToAdd = [OBJECT_TYPE.PACMAN]

        return {classToRemove, classToAdd}
    }

    setNewPos(nextMovePos) {
        this.pos = nextMovePos
    }

    setNewDiv(newDiv) {
        this.div = newDiv
    }
}

class Ghost extends Character {
}

export default Pacman