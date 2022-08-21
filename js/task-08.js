const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (password.value === '' || email.value === '') {
    alert('Please fill in all the fields!');
  }
  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
}
