const refs = {
  input: document.querySelector("#font-size-control"),
  outputText: document.querySelector("#text"),
};

function handleInput() {
  const fontSize = refs.input.value;
  refs.outputText.style.fontSize = `${fontSize}px`;
}

refs.input.addEventListener("input", handleInput);
document.addEventListener("DOMContentLoaded", handleInput);
