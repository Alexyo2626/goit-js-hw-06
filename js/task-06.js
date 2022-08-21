const inputEl = document.querySelector('#validation-input');
const correctLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlur);

function onBlur() {
  if (inputEl.value.trim().length === correctLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
