function changeBackgroundColor(id) {
  const el = document.getElementById(id);
  const redChannel = Math.floor(Math.random() * 255);
  const greenChannel = Math.floor(Math.random() * 255);
  const blueChannel = Math.floor(Math.random() * 255);
  el.style.backgroundColor = `rgb(${redChannel},${greenChannel},${blueChannel})`;
}

function initiateTransitions(id) {
  changeBackgroundColor(id);
  setInterval(function () {
    changeBackgroundColor(id);
  }, 5000);
}

window.setTimeout(function () {
  initiateTransitions('container-item-1');
}, 500);

window.setTimeout(function () {
  initiateTransitions('container-item-2');
}, 1000);

window.setTimeout(function () {
  initiateTransitions('container-item-3');
}, 1500);

window.setTimeout(function () {
  initiateTransitions('container-item-4');
}, 2000);
