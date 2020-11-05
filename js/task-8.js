// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const WIDTH_FIRST_BOX = 30;
const HEIGHT_FIRST_BOX = 30;
const STEP_PER_BOX = 10;

const buttonRenderRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector(
  'button[data-action="destroy"]',
);
const inputRef = document.querySelector('#controls > input');
const parrentBoxRef = document.querySelector('#boxes');

buttonRenderRef.addEventListener('click', buttonRender);
// buttonDestroyRef.addEventListener('click', buttonDestroy);
inputRef.addEventListener('click', clearInput);

function buttonRender() {
  const numberOfBoxes = inputRef.value ? parseInt(inputRef.value) : 0;
  createBoxes(numberOfBoxes);
}

function clearInput() {
  inputRef.value = '';
}

function createBoxes(amount) {
  let createBox = '';
  for (let i = 0; i < amount; i++) {
    const width = WIDTH_FIRST_BOX + i * STEP_PER_BOX;
    const height = HEIGHT_FIRST_BOX + i * STEP_PER_BOX;
    const color = Math.random().toString(16).slice(-6);

    createBox += `<div style = 'width: ${width}px; height: ${height}px; background-color: #${color}'></div>`;
  }

  parrentBoxRef.insertAdjacentHTML('afterBegin', createBox);
}
