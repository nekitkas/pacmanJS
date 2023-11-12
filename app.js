const circle = document.querySelector('#circle')
const resetBtn = document.querySelector('#reset')
const positionTxt = document.querySelector('#position')
let moveCircle;

let posX = 200
let posY = 200

circle.style.top = posY + 'px'
circle.style.left = posX + 'px'


function moveRight() {
    posX++
    circle.style.left = posX + 'px'
    getPos(circle)
    if (posX === window.innerWidth + 110) {
        console.log('true')
        clearInterval(moveCircle)
    }
}

function moveLeft() {
    posX--
    circle.style.left = posX + 'px'
    getPos(circle)
    if (posX === window.innerWidth - 110) {
        console.log('true')
        clearInterval(moveCircle)
    }
}

function moveUp() {
    posY--
    circle.style.top = posY + 'px'
    getPos(circle)
    if (posY === window.innerWidth - 110) {
        console.log('true')
        clearInterval(moveCircle)
    }
}

function moveDown() {
    posY++
    circle.style.top = posY + 'px'
    getPos(circle)
    if (posY === window.innerHeight + 110) {
        console.log('true')
        clearInterval(moveCircle)
    }
}

const stop = e => {
    switch (e.key) {
        case 'a':
        case 'd':
        case 'w':
        case 's':
            clearInterval(moveCircle)
            break
    }
}


let timeout = 100
const start = e => {
    if (!e.repeat) {
        switch (e.key) {
            case 'd':
                console.log('hold key ', e.key)
                moveCircle = setInterval(moveRight, timeout)
                break
            case 'a':
                console.log('hold key ', e.key)
                moveCircle = setInterval(moveLeft, timeout)
                break
            case 'w':
                console.log('hold key ', e.key)
                moveCircle = setInterval(moveUp, timeout)
                break
            case 's':
                console.log('hold key ', e.key)
                moveCircle = setInterval(moveDown, timeout)
                break

        }
    }
}
const reset = e => {
    circle.style.left = 200 + 'px'
    circle.style.top = 200 + 'px'
}

function getPos(e) {
    for (const attr of e.attributes) {
        positionTxt.textContent = `${attr.textContent}`
    }
}


document.addEventListener('keyup', stop)
document.addEventListener('keydown', start)
resetBtn.addEventListener('click', reset)
