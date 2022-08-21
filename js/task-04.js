const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const clickDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const clickIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', clickDecrement);
incrementBtn.addEventListener('click', clickIncrement);
