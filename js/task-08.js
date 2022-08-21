const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  // проверка на каждое поле (вместе и по отдельности)
  if (email.value === '' && password.value === '') {
    alert('Ты ничего не написал!');
    return;
  }
  if (email.value === '') {
    alert('Ты забыл написать почту!');
    return;
  }
  if (password.value === '') {
    alert('Ты забыл написать свой пароль!');
    return;
  }

  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formData);
  event.currentTarget.reset();
}
