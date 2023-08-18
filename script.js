const container = document.querySelector('.container'); 
container.style.cssText = 'display: flex';
let row=5; col=5;

for (let j = 0; j < col; j++) {
    const column = document.createElement('div');

    for (let i = 0; i < row; i++) {
        let box = document.createElement('div');
        box.style.cssText = 'width: 5em; height: 5em; background-color: blue; border: solid';
        column.appendChild(box);
    }

    container.appendChild(column);
}