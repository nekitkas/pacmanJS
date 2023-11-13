const resetBtn = document.querySelector('#reset')
const position = document.querySelector('#position')
const field = document.querySelector('#field')
const maxWidth = field.clientWidth - 50
const maxHeight = field.clientHeight - 50
const circle = document.querySelector('.circle')

let posX = 0;
let posY = 0;
const stepSize = 5;

document.addEventListener('keydown', moveShape)
resetBtn.addEventListener('click', function () {
    posX = 0;
    posY = 0;
    circle.style.top = posY + 'px';
    circle.style.left = posX + 'px';
    updatePosition();
})

function moveShape(event) {
    switch (event.key) {
        case 'w':
            posY = Math.max(0, posY - stepSize);
            break;
        case 's':
            posY = Math.min(maxHeight, posY + stepSize)
            break;
        case 'a':
            posX = Math.max(0, posX - stepSize)
            break;
        case 'd':
            posX = Math.min(maxWidth, posX + stepSize)
            break;
        default:
            return;
    }
    circle.style.top = posY + 'px';
    circle.style.left = posX + 'px';
    updatePosition()

}

function updatePosition() {
    position.textContent = `Position: (${posX}px, ${posY}px)`;
}
