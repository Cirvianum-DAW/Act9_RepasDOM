const languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];

// Table structure in html
// <table>
//   <thead>
//     <tr>
//       <th>Language</th>
//       <th>Year</th>
//       <th>File Extension</th>
//       <th>Creator</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>JavaScript</td>
//       <td>1995</td>
//       <td>.js</td>
//       <td>Brendan Eich</td>
//     </tr>
//     <tr>
//       <td>Java</td>
//       <td>1995</td>
//       <td>.java</td>
//       <td>James Gosling</td>
//     </tr>
//     ...
//   </tbody>
// </table>

function tableCreator(dataArray, targetElement) {
  // Anem a intentar-ho fent ús de funcions del DOM només.

  // Creem els elements
  const table = document.createElement('table');

  // Creem els elements de la capçalera
  const trElement = document.createElement('tr');
  for (const key in dataArray[0]) {
    const thElement = document.createElement('th');
    thElement.innerHTML = key;
    trElement.appendChild(thElement);
  }
  // Afegim la capçalera a la taula
  table.appendChild(trElement);
  // Creem els elements del cos de la taula
  for (const element of dataArray) {
    // Creem l'element per cada nova fila
    const trElement = document.createElement('tr');
    for (const key in element) {
      // Creem l'element per cada nova valor de la columna
      const tdElement = document.createElement('td');
      // En cada iteració anem afegint el valor de cada propietat {name: 'PHP', releaseDate: 1995, fileExtension: '.php', creator: 'Rasmus Lerdorf'}
      tdElement.innerHTML = element[key];
      trElement.appendChild(tdElement);
    }
    // Afegim el cos a la taula
    table.appendChild(trElement);
  }

  // Afegim la taula al document
  targetElement.appendChild(table);
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));

// source: https://www.codeguage.com/courses/js/html-dom-building-tables-exercise
