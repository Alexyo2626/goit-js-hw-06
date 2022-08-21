const menuItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuItems.length}`);
console.log('');

menuItems.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  console.log('');
});

// добавлять console.log с пустой строкой для визуального разделения в консоли браузера,
// возможно и не самая лучшая идея.
// Если есть что то лучше, подкажите)