import {DIRECTIONS, OBJECT_TYPE} from "./setup.js";

class Character {

    constructor(name, speed, pos, div) {
        this.name = name
        this.speed = speed
        this.pos = pos
        this.currentDir = DIRECTIONS.d
        this.nextDir = DIRECTIONS.d
        this.div = div
        this.transition = 0
    }

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
                    this.div.style.transform = `translateX(${-this.transition}%) rotate(${this.currentDir.rotate}deg)`
                    break
                case DIRECTIONS.d.movement:
                    this.div.style.transform = `translateX(${this.transition}%) rotate(${this.currentDir.rotate}deg)`
                    break
                case DIRECTIONS.w.movement:
                    this.div.style.transform = `translateY(${-this.transition}%) rotate(${this.currentDir.rotate}deg)`
                    break
                case DIRECTIONS.s.movement:
                    this.div.style.transform = `translateY(${this.transition}%) rotate(${this.currentDir.rotate}deg)`
                    break
            }
            this.transition += this.speed
            return false
        } else {
            this.transition = 0
            return true
        }
    }

    makeMove() {
        const classToRemove = [OBJECT_TYPE.PACMAN]
        const classToAdd = [OBJECT_TYPE.PACMAN]

        return {classToRemove, classToAdd}
    }

    setNewPos(nextMovePos, newDiv) {
        this.pos = nextMovePos
        this.div = newDiv
        this.div.style.transform = `rotate(${this.currentDir.rotate}deg)`
    }
}

export class Pacman extends Character {


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

}

export class Ghost extends Character {

}
