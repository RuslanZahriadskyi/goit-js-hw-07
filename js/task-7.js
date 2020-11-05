// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const textRef = document.querySelector('#text');
const sliderRef = document.querySelector('#font-size-control');

textRef.style.fontSize = sliderRef.value + 'px';

sliderRef.addEventListener('input', sliderChanger);

function sliderChanger() {
  textRef.style.fontSize = sliderRef.value + 'px';
}
