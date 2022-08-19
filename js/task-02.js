const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(elem => {
  const listEl = document.createElement('li');
  listEl.textContent = elem;
  listEl.classList.add('item');
  return listEl;
});

const menuEl = document.querySelector('#ingredients');
menuEl.append(...listItems);
