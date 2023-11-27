export const GRID_SIZE = 20
export const CELL_SIZE = 20

export const DIRECTIONS = {
    a: {
        movement: -1,
        rotate: 180,
    },
    w: {
        movement: -GRID_SIZE,
        rotate: 270,
    },
    d: {
        movement: 1,
        rotate: 0,
    },
    s: {
        movement: GRID_SIZE,
        rotate: 90,
    }
}

export const OBJECT_TYPE = {
    BLANK: 'blank',
    WALL: 'wall',
    PACMAN: 'pacman',
    DOT: 'dot',
    GHOST: 'ghost',
    BLINKY: 'blinky',
    PINKY: 'pinky',
    INKY: 'inky',
    CLYDE: 'clyde',
}

export const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.PACMAN,
    OBJECT_TYPE.DOT,
    OBJECT_TYPE.GHOST,
    OBJECT_TYPE.BLINKY,
    OBJECT_TYPE.PINKY,
    OBJECT_TYPE.INKY,
    OBJECT_TYPE.CLYDE,
]

export const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1,
    1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
    1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
    1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1,
    1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1,
    1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1,
    1, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 1,
    1, 1, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 1,
    1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1,
    1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1,
    1, 3, 1, 1, 3, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 3, 1, 1, 3, 1,
    1, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 1,
    1, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1,
    1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1,
    1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]

export const eatDot = new Audio('sounds/credit.wav')