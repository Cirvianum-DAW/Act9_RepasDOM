const fruitList = ['apple', 'banana', 'orange', 'grape', 'strawberry'];

const ulElement = document.querySelector('ul');
// const ulElement = document.getElementsByTagName("ul")[0];

fruitList.forEach((fruit) => {
  const itemElement = document.createElement('li');
  itemElement.textContent = fruit;
  ulElement.appendChild(itemElement);
});
