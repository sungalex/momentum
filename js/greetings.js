const loginContainer = document.querySelector('.login-container');
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const todoContainer = document.querySelector('#todo-container');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  /*
     event가 발생하면 callback 함수를 호출 시 첫번째 인수로 event에 대한 정보(event object)를 전달해줌
     form element의 submit evnet가 발생하면 브라우저가 default로 refresh를 함(form의 action을 실행함)
     preventDefault() 함수는 event의 기본 동작을 실행하지 않도록 막아줌
  */
  event.preventDefault();
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  // localStorage는 브라우저의 저장 공간이며, 변수를 선언하지 않고 바로 사용함
  // localStorage는 브라우저를 refresh 해도 지워지지 않음
  localStorage.setItem(USERNAME_KEY, username);

  paintingGreetings(username);
}

function paintingGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginContainer.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintingGreetings(savedUsername);
}
