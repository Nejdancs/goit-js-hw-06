const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
    return;
  }

  if (password.value.length <= 6) {
    alert("Длинна пароля должна быть более 6 символов");
    return;
  }

  console.log({ [email.name]: email.value, [password.name]: password.value });

  event.currentTarget.reset();
}

formRef.addEventListener("submit", handleSubmit);
