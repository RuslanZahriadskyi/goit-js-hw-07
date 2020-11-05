// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationCheck);

function validationCheck(event) {
  const inputRefLength = Number(event.target.getAttribute('data-length'));

  event.target.classList.add('valid');
  event.target.classList.add('invalid');

  if (event.target.value) {
    inputRefLength === event.target.value.length
      ? event.target.classList.toggle('invalid')
      : event.target.classList.toogle('valid');
  }
}
