function allowDrop(ev) {
  ev.preventDefault();
}
 
function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}
 
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}

let print = document.getElementById('print');
const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', e =>{
  let hw = prompt('¿Cúal es tu tarea?');
  console.log(hw);
  
  if (hw != null) {
    print.innerHTML += `<div  draggable="true" ondragstart="drag(event)" id="drag1"> ${hw}</div>`;
  }
});


