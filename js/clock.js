const dateSpan = document.querySelector("#clock span:first-child");
const timeSpan = document.querySelector("#clock span:last-child");

// setInterval() : 정해진 시간이 경과할 때마다 Callback 함수를 호출해주는 내장 함수
// setTimeout() : 일정한 시간이 지난 후 한번만 Callback 함수를 호출하는 함수
function getClock() {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth()).padStart(2, '0');
  const date = String(today.getDate()).padStart(2, '0');
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');

  dateSpan.innerText = `${year}-${month}-${date}`;
  timeSpan.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
