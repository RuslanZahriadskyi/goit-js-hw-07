let span = document.querySelector('span');
let classes = span.classList;

span.addEventListener('click', function () {
  let result = classes.toggle('c');

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  }
  //   else {
  //     span.textContent = `'c' removed; classList is now "${classes}".`;
  //   }
});
