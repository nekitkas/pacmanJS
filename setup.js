export const GRID_SIZE = 9
export const CELL_SIZE = 20

export const DIRECTIONS = {
    a: {
        movement: -1,
    },
    w: {
        movement: -GRID_SIZE,
    },
    d: {
        movement: 1,
    },
    s: {
        movement: GRID_SIZE,
    }
}

export const OBJECT_TYPE = {
    BLANK: 'blank',
    WALL: 'wall',
    PACMAN: 'pacman'
}

export const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.PACMAN
]

export const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
]