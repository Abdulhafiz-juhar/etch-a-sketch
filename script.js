const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';
let row=25; col=5;

// for (let j = 0; j < col; j++) {
//     const column = document.createElement('div');

//     for (let i = 0; i < row; i++) {
//         let box = document.createElement('div');
//         box.classList.add('boxes');
//         box.style.cssText = 'flex: 1; background-color: blue; border: solid';
//         column.appendChild(box);
//     }

//     container.appendChild(column);
// }


//adjust the percent of flex-basis from 20% to be dynamic
    for (let i = 0; i < row; i++) {
        let box = document.createElement('div');
        box.classList.add('boxes');
        box.style.cssText = 'flex: 0 0 20%; background-color: blue; border: solid';
        container.appendChild(box);
    }

function mark() {
    this.style.backgroundColor = 'red';
}

const boxes = document.querySelectorAll('.boxes');
boxes.forEach(box => box.addEventListener('mouseenter', mark));