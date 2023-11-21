export const GRID_SIZE = 9
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
    BLINKY: 'blinky'
}

export const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.PACMAN,
    OBJECT_TYPE.DOT,
    OBJECT_TYPE.BLINKY
]

export const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 3, 3, 3, 3, 3, 3, 3, 1,
    1, 3, 1, 1, 1, 0, 1, 3, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 3, 3, 3, 3, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
]

export const eatDot = new Audio('sounds/credit.wav')