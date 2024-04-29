const app = document.getElementById('list-app');

// Create the necessary elements
const list = document.createElement('ul');
app.appendChild(list);
const input = document.createElement('input');
input.setAttribute('type', 'text');
const addButton = document.createElement('button');
addButton.innerHTML = 'Create New';

// Add event listeners to the elements
addButton.addEventListener('click', function () {
  const newItem = document.createElement('LI');
  newItem.innerHTML = input.value;
  list.appendChild(newItem);
  input.value = '';
});

// When checking a tag name, we use the uppercase version of the tag name

list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    const text = prompt('Enter new text:');
    event.target.innerHTML = text;
  }
});

app.appendChild(input);
app.appendChild(addButton);
