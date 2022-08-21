const createRandomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const curentColorEl = document.querySelector('.color');

buttonEl.addEventListener('click', changeBgColor);

function changeBgColor() {
  bodyEl.style.backgroundColor = createRandomColor();
  curentColorEl.textContent = createRandomColor();
  // если в строку выше написать: curentColorEl.textContent = bodyEl.style.backgroundColor,
  // то в HTML отображается цвет в RGB, а если как я написал - то в HEX формате.
  // Почему так происходит, я не придумал?!
}
