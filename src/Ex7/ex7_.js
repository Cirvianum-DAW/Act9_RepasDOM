const imageContainer = document.querySelector('#imageContainer');

const images = [
  'esglesia.jpg',
  'casa pedra.jpg',
  'flors.jpg',
  'bioconstruccio.jpg',
  'sala estar.jpg',
];

function displayImages() {
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    console.log(image);
    imgElement.src = './images/' + image;
    imgElement.alt = image;

    const titleElement = document.createElement('p');
    titleElement.textContent = image;

    const imageWrapper = document.createElement('div');
    imageWrapper.appendChild(imgElement);
    imageWrapper.appendChild(titleElement);

    imageContainer.appendChild(imageWrapper);
  });
}

displayImages();

function searchFilters(input, selector) {
  document.addEventListener('keyup', (event) => {
    // alternative to event.target.matches(input)
    // if (event.target === document.querySelector(input)) {
    if (event.target === document.querySelector(input)) {
      //console.log(event.key)
      //console.log(event.target.value)

      // We can add the possibility to clear the search by pressing the Escape key
      if (event.key === 'Escape') event.target.value = '';

      // Every time we type a letter, we filter the list
      document.querySelectorAll(selector).forEach((element) => {
        // includes will return "true" if the element contains the string we are looking for. It's case sensitive.
        element.textContent
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
          ? element.classList.remove('filter')
          : element.classList.add('filter');
      });
    }
  });
}

searchFilters('#search', '#imageContainer div');

// https://roddevwork.github.io/dom-exercices-javascript/
