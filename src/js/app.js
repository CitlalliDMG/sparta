const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Bucle a través de vacíos y llamando eventos drag

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragLeave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Funciones de arrastre

function dragStart() {
    this.className += 'hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(){
    
}

function dragEnter(){
    
}

function dragLeave(){
    
}

function dragDrop(){
    
}