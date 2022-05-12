const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const DEFAULT_USERNAME = "Anonymous";

function onInput(event) {
  const userInput = event.currentTarget.value;

  if (userInput === "") {
    refs.output.textContent = DEFAULT_USERNAME;
  } else {
    refs.output.textContent = userInput;
  }
}

refs.input.addEventListener("input", onInput);
