// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const inputRefLength = parseInt(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', validationCheck);
inputRef.addEventListener('click', clearInput);

function validationCheck() {
  inputRefLength === inputRef.value.length
    ? inputRef.classList.toggle('valid')
    : inputRef.classList.toggle('invalid');
}

function clearInput() {
  inputRef.value = '';
  inputRef.classList.remove('valid', 'invalid');
}
