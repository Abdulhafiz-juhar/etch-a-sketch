const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';

let className = 'mark';
function mark() {
    // this.style.backgroundColor = 'red';
    this.classList.add(className);
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

const gradientButton = document.querySelector('.gradient');
gradientButton.addEventListener('click', makeGradientBox);