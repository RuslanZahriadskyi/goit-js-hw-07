// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
let counterValue = 0;
const changeCurrentValue = () => {
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
};
const decrement = () => {
  counterValue -= 1;
};

incrementBtnRef.addEventListener('click', () => {
  increment();
  changeCurrentValue();
});

decrementBtnRef.addEventListener('click', () => {
  decrement();
  changeCurrentValue();
});
