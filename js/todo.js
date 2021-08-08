const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const doneList = document.querySelector('#done-list');

const TODOS_KEY = 'todos';
const DONES_KEY = 'dones';
let toDos = [];
let dones = [];

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveDone() {
  localStorage.setItem(DONES_KEY, JSON.stringify(dones));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
}

function deleteDone(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
  dones = dones.filter((done) => done.id !== parseInt(li.id));
  saveDone();
}

function doneToDo(event) {
  const li = event.target.parentElement.parentElement;
  const span = li.querySelector('.todoText');
  deleteToDo(event);
  const newDoneObj = {
    text: span.innerText,
    id: parseInt(li.id),
  };
  dones.push(newDoneObj);
  paintDone(newDoneObj);
  saveDone();
}

function goBackToDo(event) {
  const li = event.target.parentElement.parentElement;
  const span = li.querySelector('.doneText');
  deleteDone(event);
  const newToDoObj = {
    text: span.innerText,
    id: parseInt(li.id),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const spanIcon = document.createElement('span');
  const spanText = document.createElement('span');
  spanText.innerText = newToDo.text;
  spanText.setAttribute('class', 'todoText');
  const close = document.createElement('i');
  const check = document.createElement('i');
  close.setAttribute('class', 'fas fa-minus-circle');
  close.addEventListener('click', deleteToDo);
  close.setAttribute('title', 'Delete');
  check.setAttribute('class', 'fas fa-arrow-circle-right');
  check.addEventListener('click', doneToDo);
  check.setAttribute('title', 'Done');
  spanIcon.appendChild(close);
  spanIcon.appendChild(check);
  li.appendChild(spanIcon);
  li.appendChild(spanText);
  toDoList.appendChild(li);
}

function paintDone(newDone) {
  const li = document.createElement('li');
  li.id = newDone.id;
  const spanIcon = document.createElement('span');
  const spanText = document.createElement('span');
  spanText.innerText = newDone.text;
  spanText.setAttribute('class', 'doneText');
  const close = document.createElement('i');
  const check = document.createElement('i');
  close.setAttribute('class', 'fas fa-minus-circle');
  close.addEventListener('click', deleteDone);
  close.setAttribute('title', 'Delete');
  check.setAttribute('class', 'fas fa-arrow-circle-left');
  check.addEventListener('click', goBackToDo);
  check.setAttribute('title', 'Go back ToDo');
  spanIcon.appendChild(close);
  spanIcon.appendChild(check);
  li.appendChild(spanIcon);
  li.appendChild(spanText);
  doneList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

const savedDones = localStorage.getItem(DONES_KEY);

if (savedDones) {
  const parsedDones = JSON.parse(savedDones);
  dones = parsedDones;
  parsedDones.forEach(paintDone);
}
