const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';

let row = 16;
let totalBoxes=row*row;
let basisPercent = 100/row;

    for (let i = 0; i < totalBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes');
        box.style.cssText = `flex: 0 0 ${basisPercent}%; background-color: blue; border: solid`;
        container.appendChild(box);
    }

function mark() {
    this.style.backgroundColor = 'red';
}

const boxes = document.querySelectorAll('.boxes');
boxes.forEach(box => box.addEventListener('mouseenter', mark));