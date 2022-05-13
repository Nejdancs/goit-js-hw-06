const refs = {
  inputNumber: document.querySelector("#controls input[type='number']"),
  inputStep: document.querySelector("#controls input[type='range']"),
  outputText: document.querySelector("#text"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  sortBtn: document.querySelector("[data-sort]"),
  outputBoxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCreateBtn() {
  const amount = refs.inputNumber.value;
  const sizeInit = 30;
  const sizeStep = Number(refs.inputStep.value);

  const boxes = [];
  let size = parseInt(
    refs.outputBoxes.classList.contains("from-big")
      ? refs.outputBoxes.firstElementChild?.style.width
      : refs.outputBoxes.lastElementChild?.style.width
  );

  for (let i = 1; i <= amount; i += 1) {
    if (isNaN(size)) {
      size = sizeInit;
    } else {
      size += sizeStep;
    }

    boxes.push(createBox(size));
  }

  if (refs.outputBoxes.classList.contains("from-big")) {
    const reverseBoxes = boxes.reverse();
    refs.outputBoxes.prepend(...reverseBoxes);
  }

  if (refs.outputBoxes.classList.contains("from-small")) {
    refs.outputBoxes.append(...boxes);
  }
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

function sortBox() {
  const boxElements = [...refs.outputBoxes.children];

  const sort = boxElements.sort((a, b) => {
    if (refs.outputBoxes.classList.contains("from-big")) {
      return parseInt(b.style.width) - parseInt(a.style.width);
    }

    return parseInt(a.style.width) - parseInt(b.style.width);
  });

  return sort;
}

function onDestroyBtn() {
  refs.outputBoxes.innerHTML = "";
}

function onSortBtn(event) {
  refs.outputBoxes.classList.toggle("from-small");
  refs.outputBoxes.classList.toggle("from-big");

  event.currentTarget.textContent = refs.outputBoxes.classList.contains(
    "from-big"
  )
    ? "Sort big > small"
    : "Sort small > big";

  refs.outputBoxes.append(...sortBox());
}

function handleInputStep() {
  refs.outputText.textContent = `${refs.inputStep.value}px`;
}

refs.inputStep.addEventListener("input", handleInputStep);
refs.createBtn.addEventListener("click", onCreateBtn);
refs.destroyBtn.addEventListener("click", onDestroyBtn);
refs.sortBtn.addEventListener("click", onSortBtn);

// ====================================Базовый вариант=====================================================
// const refs = {
//   inputNumber: document.querySelector("#controls input"),
//   createBtn: document.querySelector("[data-create]"),
//   destroyBtn: document.querySelector("[data-destroy]"),
//   outputBoxes: document.querySelector("#boxes"),
// };

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function onCreateBtn() {
//   const amount = refs.inputNumber.value;
//   const sizeInit = 30;
//   const boxes = [];
//   let size = parseInt(refs.outputBoxes.lastElementChild?.style.width);

//   for (let i = 1; i <= amount; i += 1) {
//     if (isNaN(size)) {
//       size = sizeInit;
//     } else {
//       size += 10;
//     }

//     boxes.push(createBox(size));
//   }

//   refs.outputBoxes.append(...boxes);
// }

// function createBox(size) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = getRandomHexColor();
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
//   box.classList.add("box");
//   box.textContent = `${size}px`;

//   return box;
// }

// function onDestroyBtn() {
//   refs.outputBoxes.innerHTML = "";
// }

// refs.createBtn.addEventListener("click", onCreateBtn);
// refs.destroyBtn.addEventListener("click", onDestroyBtn);
