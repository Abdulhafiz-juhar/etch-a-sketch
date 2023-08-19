const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';

const randColorButton = document.querySelector('.randColor');


let className = 'mark';

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

randColorButton.addEventListener('click', function() {
    this.classList.toggle('randColorEnabled');
})

function mark() {
    if(randColorButton.classList.contains('randColorEnabled')) {
        className = '';
        this.style.backgroundColor = getRandomColor();
    } else {
        if(this.style.backgroundColor) {
            this.style.removeProperty('background-color');
        }
        className = 'mark';
        this.classList.add(className);
    }
    // this.style.backgroundColor = 'red';
}

let row =16;

function createBoxes () {
    let totalBoxes=row*row;
    let basisPercent = 100/row;
    
        for (let i = 0; i < totalBoxes; i++) {
            let box = document.createElement('div');
            box.classList.add('boxes');
            box.style.cssText = `flex: 0 0 ${basisPercent}%; border: solid`;
            container.appendChild(box);
        }

        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach(box => box.addEventListener('mouseenter', mark));
}

createBoxes();
function enterSize() {
    do {
        row = parseInt(prompt('Please enter the number of squares per side'));
        if (row > 100) {
            while (row > 100) {
                row = parseInt(prompt('The number must be lessthan 100, Please try again!'));
            }
        }
    } while(!row);
   
   container.textContent = '';
   createBoxes();
}

const sizeButton = document.querySelector('.size');
sizeButton.addEventListener('click', enterSize);


