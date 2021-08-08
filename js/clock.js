const clock = document.querySelector('#clock');

// setInterval() : 정해진 시간이 경과할 때마다 Callback 함수를 호출해주는 내장 함수
// setTimeout() : 일정한 시간이 지난 후 한번만 Callback 함수를 호출하는 함수
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
