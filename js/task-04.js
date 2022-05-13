// ====================Вариант в котором при удержании кнопки изменяется значение ===============================
const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

const delayInterval = 200;

let counterValue = 0;
let intId;
let timeMouseDown;
let timeMouseUp;
let timeMouseDelay;

function onDecrementBtn(event) {
  function decrementValue() {
    counterValue -= 1;
    renderValue();
  }

  checkEvent(event, decrementValue);
}

function onIncrementBtn(event) {
  function incrementValue() {
    counterValue += 1;
    renderValue();
  }
  checkEvent(event, incrementValue);
}

function checkEvent(event, incrementValue) {
  if (event.type === "mousedown") {
    timeMouseDown = event.timeStamp; // Получаем время нажатия на кнопку
    intId = setInterval(incrementValue, delayInterval);
  }

  if (event.type === "mouseup" || event.type === "mouseleave") {
    timeMouseUp = event.timeStamp; // Получаем время отпускания кнопки
    timeMouseDelay = timeMouseUp - timeMouseDown; // Вычисляем время задержки на кнопке

    clearInterval(intId);

    if (delayInterval > timeMouseDelay) {
      incrementValue();
    }
  }
}

function renderValue() {
  refs.value.textContent = counterValue;
}

refs.decrement.addEventListener("mousedown", onDecrementBtn);
refs.decrement.addEventListener("mouseup", onDecrementBtn);
refs.decrement.addEventListener("mouseleave", onDecrementBtn);
refs.increment.addEventListener("mousedown", onIncrementBtn);
refs.increment.addEventListener("mouseup", onIncrementBtn);
refs.increment.addEventListener("mouseleave", onIncrementBtn);

// =====================================Вариант по ТЗ================================================

// const refs = {
//   decrement: document.querySelector('[data-action="decrement"]'),
//   increment: document.querySelector('[data-action="increment"]'),
//   value: document.querySelector("#value"),
// };

// let counterValue = 0;

// function onDecrementBtn() {
//   counterValue -= 1;
//   renderValue();
// }

// function onIncrementBtn() {
//   counterValue += 1;
//   renderValue();
// }

// function renderValue() {
//   refs.value.textContent = counterValue;
// }

// refs.decrement.addEventListener("mousedown", onDecrementBtn);
// refs.increment.addEventListener("mousedown", onIncrementBtn);
