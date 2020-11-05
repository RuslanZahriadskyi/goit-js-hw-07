// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const inputRefLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', validationCheck);

function validationCheck() {
  inputRef.classList.remove('valid');
  inputRef.classList.remove('invalid');

  inputRefLength === inputRef.value.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');

  inputRef.value = '';
}
