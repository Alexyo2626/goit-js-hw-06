function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);

// создание
function createBoxes(amount) {
  amount = inputEl.value;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const divBoxChildEl = document.createElement('div');
    divBoxChildEl.style.width = `${30 + i * 10}px`;
    divBoxChildEl.style.height = `${30 + i * 10}px`;
    divBoxChildEl.style.backgroundColor = getRandomHexColor();
    boxes.push(divBoxChildEl);
  }

  boxesEl.append(...boxes);
}

// очищение
destroyBtnEl.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
}
