const resetBtn = document.querySelector('#reset');
const position = document.querySelector('#position');
const field = document.querySelector('#field');
const circle = document.querySelector('.circle');

const TOP_COLLISION = 'TOP_COLLISION';
const BOTTOM_COLLISION = 'BOTTOM_COLLISION';
const LEFT_COLLISION = 'LEFT_COLLISION';
const RIGHT_COLLISION = 'RIGHT_COLLISION';
const NO_COLLISION = 'NO_COLLISION';
let collisionType = NO_COLLISION

const GRID_SIZE = 10
const CELL_SIZE = 50

const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]

const OBJECT_TYPE = {
    BLANK: 'blank',
    WALL: 'wall'
}

const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL
]

let posX = 250;
let posY = 264;

let keys = {
    w: false,
    s: false,
    d: false,
    a: false
}

function createLevel(level) {
    field.style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`
    level.forEach((el) => {
        const div = document.createElement('div')
        div.classList.add('square', CLASS_LIST[el])
        div.style.cssText = `width: ${CELL_SIZE}px; height: ${CELL_SIZE}px;`
        field.appendChild(div)
    })
}

createLevel(LEVEL)

const stepSize = 1;


document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

resetBtn.addEventListener('click', function () {
    posX = 250;
    posY = 255;
    updatePosition();
});

function pressOn(e) {
    e.preventDefault();
    keys[e.key] = true;
}

function pressOff(e) {
    e.preventDefault();
    keys[e.key] = false;
}

function moveShape() {
    collisionType = checkCollision();
    moveLeft();
    moveRight();
    moveUp();
    moveDown();
    circle.style.top = posY + 'px';
    circle.style.left = posX + 'px';
    updatePosition();

    window.requestAnimationFrame(moveShape)
}

window.requestAnimationFrame(moveShape)

function moveLeft() {
    if (keys.a && collisionType !== LEFT_COLLISION) {
        posX -= stepSize;
    }
}

function moveRight() {
    if (keys.d && collisionType !== RIGHT_COLLISION) {
        posX += stepSize;
    }
}

function moveUp() {
    if (keys.w && collisionType !== TOP_COLLISION) {
        posY -= stepSize;
    }
}

function moveDown() {
    if (keys.s && collisionType !== BOTTOM_COLLISION) {
        posY += stepSize;
    }
}

function checkCollision() {
    const shape = circle.getBoundingClientRect();
    const walls = document.querySelectorAll('.wall');
    let result = NO_COLLISION;

    walls.forEach((wall) => {
        const obstacle = wall.getBoundingClientRect();

        if (shape.top < obstacle.bottom &&
            shape.bottom > obstacle.top &&
            shape.left < obstacle.right &&
            shape.right > obstacle.left) {
            const overlapTop = obstacle.bottom - shape.top;
            const overlapBottom = shape.bottom - obstacle.top;
            const overlapLeft = obstacle.right - shape.left;
            const overlapRight = shape.right - obstacle.left;
            const minOverlap = Math.min(overlapTop, overlapBottom, overlapLeft, overlapRight);

            if (minOverlap === overlapTop) {
                result = TOP_COLLISION;
            } else if (minOverlap === overlapBottom) {
                result = BOTTOM_COLLISION;
            } else if (minOverlap === overlapLeft) {
                result = LEFT_COLLISION;
            } else if (minOverlap === overlapRight) {
                result = RIGHT_COLLISION;
            }
        }
    });

    console.log(result);
    return result;
}

function updatePosition() {
    position.textContent = `Position: (${posX}px, ${posY}px)`;
}