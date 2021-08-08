/*
  html 파일에서 <script src="app.js"></script> 구문으로 app.js 파일을 로드하기 때문에
  app.js 파일에서 html의 "documnet"에 접근하여 element를 가져오거나 수정할 수 있음
*/

// --------- [ID로 찾기] -------------------
/* const title = document.getElementById('title');

title.innerText = 'Got you!';

console.log(title.id);
console.log(title.className);
 */

// --------- [console.dir()] -------------------
/* console.dir(title);    // element의 내부(javascript objects) 확인
 */

// ---------- [Class Name으로 찾기] ------------------
/* const hellos = document.getElementsByClassName('hello');
console.log(hellos);
 */

// ---------- [Best Way: querySelector] ------------------
/* const title = document.querySelector('#title');
const hellos = document.querySelectorAll('div.hello:first-child h1');

console.log(title);
console.log(hellos);
 */

/*
// ---------- [Event 1] ------------------
const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  title.style.color = 'blue';
}

// function을 바로 실행할 때는 handleTitleClick() 처럼 사용
// 함수를 인수로 전달할 때는 handleTitleClick 처럼 사용 (함수명 뒤에 괄호를 사용하지 않음)
title.addEventListener('click', handleTitleClick);

// ---------- [Event 2] ------------------
function handleMouseEnter() {
  title.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
  title.innerText = 'Mouse is gone!';
}

title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

// ---------- [Event 3] ------------------
function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy() {
  alert('Copier!');
}
function handleWindowOffline() {
  alert('SOS on WIFI');
}
function handleWindowOnline() {
  alert('ALL GOOD');
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
*/

// ---------- [CSS in Javascript part1] ------------------
/*
const title = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  title.style.color = newColor;
}

title.addEventListener('click', handleTitleClick);
*/

// ---------- [CSS in Javascript part3] ------------------
const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  /*   const clickedClass = 'clicked';
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
  */
  h1.classList.toggle('clicked');
}

h1.addEventListener('click', handleTitleClick);
