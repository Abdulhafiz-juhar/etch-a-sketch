const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';

const randColorButton = document.querySelector('.randColor');
const progressiveColorButton = document.querySelector('.progressiveColor')

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

let steps = 10;
let blackColorOneRgb;
let intensityPerStep = 255 / (steps);
let currentStep = steps-1;
function getProgressiveBlack() {
    blackColorOneRgb = Math.round(intensityPerStep * currentStep);
    if(currentStep > 0) {
        --currentStep;
    } else {
        currentStep = steps-1;
    }
    return `rgb(${blackColorOneRgb},${blackColorOneRgb},${blackColorOneRgb})`;
}

randColorButton.addEventListener('click', function() {
    this.classList.add('randColorEnabled');
    if(progressiveColorButton.classList.contains('progressiveColorEnabled')) {
        progressiveColorButton.classList.remove('progressiveColorEnabled');
    }
});
progressiveColorButton.addEventListener('click',function() {
    this.classList.add('progressiveColorEnabled');
    if(randColorButton.classList.contains('randColorEnabled')) {
        randColorButton.classList.remove('randColorEnabled');
    }
});

function mark() {
    if(randColorButton.classList.contains('randColorEnabled')) {
        this.style.backgroundColor = getRandomColor();
    } else if(progressiveColorButton.classList.contains('progressiveColorEnabled')) {
        this.style.backgroundColor = getProgressiveBlack();
    } else {
        this.style.backgroundColor = 'black';
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

   currentStep = steps-1;
}

const sizeButton = document.querySelector('.size');
sizeButton.addEventListener('click', enterSize);


// make the progressive darkening also by botton toggle
// And make the default normal darkening