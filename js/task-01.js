const menuItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuItems.length}`);
console.log('');

menuItems.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`);
  console.log(`Elements: ${elem.lastElementChild.children.length}`);
  console.log('');
});
