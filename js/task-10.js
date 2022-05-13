const refs = {
  inputNumber: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  outputBoxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateBtn() {
  const amount = refs.inputNumber.value;
  const sizeInit = 30;
  const boxes = [];
  let size = parseInt(refs.outputBoxes.lastElementChild?.style.width);

  for (let i = 1; i <= amount; i += 1) {
    if (isNaN(size)) {
      size = sizeInit;
    } else {
      size += 10;
    }

    boxes.push(createBox(size));
  }

  refs.outputBoxes.append(...boxes);
  creaateAnimation(boxes);
}

function creaateAnimation(boxes) {
  boxes.forEach((box, i) => {
    let delay = i * 200;
    setTimeout(() => box.classList.remove("box-translate"), delay);
  });
}

function createBox(size) {
  const box = document.createElement("div");
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.classList.add("box");
  box.classList.add("box-translate");
  box.textContent = `${size}px`;

  return box;
}

function onDestroyBtn() {
  refs.outputBoxes.innerHTML = "";
}

refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", onDestroyBtn);
