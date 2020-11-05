// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createListIngredients = ingredient => {
  const ingredientName = document.createElement('li');
  ingredientName.textContent = ingredient;

  return ingredientName;
};

const ingredientsRef = document.querySelector('#ingredients');

const ingredientList = ingredients.map(el => createListIngredients(el));

ingredientsRef.append(...ingredientList);
