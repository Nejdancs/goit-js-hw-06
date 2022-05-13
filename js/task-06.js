const inputRef = document.querySelector("#validation-input");

function handleBlur(event) {
  const validLength = Number(event.currentTarget.dataset.length);
  const userInputLength = event.currentTarget.value.length;

  if (validLength === userInputLength) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", handleBlur);
