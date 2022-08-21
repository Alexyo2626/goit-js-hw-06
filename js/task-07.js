const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const event = inputEl.addEventListener('change', changeFontSize);

function changeFontSize() {
  textEl.style.fontSize = inputEl.value + 'px';
  showTextSize.textContent = `Font size : ${textEl.style.fontSize}`; // отображение текущего размера шрифта
}

// Для отображения текущего размера шрифта. Поиграться для себя)
let meadleValueRange = (Number(inputEl.max) + Number(inputEl.min)) / 2;
textEl.style.fontSize = `${meadleValueRange}px`;

const showTextSize = document.createElement('p');
showTextSize.textContent = `Font size : ${textEl.style.fontSize}`;
textEl.after(showTextSize);
