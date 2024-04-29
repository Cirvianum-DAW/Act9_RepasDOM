# Abans de començar

## Entorn

Aquest repositori és un entorn bàsic amb Prettier, ESLint i Jest. Pots mirar el fitxer package.json per veure les versions de les dependències.

## Instal·lació

```bash
npm install
```

Verifica si la configuració per defecte de Prettier, ESLint i Jest et convé. Si no, modifica els fitxers de configuració.

# Exercicis DOM

A continuació et proposo petits reptes relacionats amb la manipulació del DOM. Per a cada exercici, crea un fitxer HTML i un fitxer JS amb el mateix nom. Per exemple, per a l'exercici 1, crea un fitxer exercici1.html i un fitxer exercici1.js. Pots separar-los en carpetes si ho consideres oportú.

Crec que has fet una bona feina amb les teves idees. Aquí tens les traduccions al català:

### Ex1 - Llista de fruites

Tens alguns noms de fruites diferents i un element html de llista no ordenada; afegeix un element de llista per a cada una de les fruites a la llista no ordenada amb algun mètode recuriu.

```html
// HTML
<ul></ul>
```

```js
// JS
const fruitList = ['poma', 'plàtan', 'tomàquet'];
```

### Ex2 - Afegir el logotip

Descarrega un logotip (potser el de la teva pàgina de MP9) i afegeix-lo (element d'imatge) com a element fill de l'element de div existent.

```html
// HTML
<div></div>
```

```js
// JS
const imgLogo = 'logo.png';
```

### Ex3 - Canvia el primer i l'últim element d'una llista no ordenada

Canvia el text del primer i l'últim element de cada element de llista no ordenada en aquesta pàgina de manera que passin a ser el text `primer` i `últim`. Fes servir pseudoselectors i algun mètode recursiu.

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<ul>
  <li>a</li>
  <li>b</li>
  <li>c</li>
</ul>
<ul>
  <li>👻</li>
  <li>👽</li>
  <li>🦁</li>
</ul>
```

### Ex4 - Llista d'elements

Estàs construint una pàgina web que mostra una llista d'elements. L'usuari hauria de poder afegir nous elements a la llista i editar el text dels elements. La teva tasca és utilitzar l'API del DOM per crear els elements necessaris i que a través d'`eventListeners` es puguin editar els elements ja introduits.

```html
<div id="list-app">
  <!-- Aquí es crearà i mostrarà la llista d'elements -->
</div>
```

- Has de crear tots els elements addicionals amb l'API del DOM. No pots afegir-los al HTML directament.
- Ha d'haver-hi un input de text i un botó per afegir nous elements a la llista.
- L'element de la llista s'ha de poder editar simplement clicant a sobre d'ell i canviant el seu text.

### Ex5 - Creant una taula

Considera el següent array d'objectes:

```javascript
var languages = [
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
```

Volem converitr aquesta informació a una taula HTML com la següent:

| Nom        | Data de Llançament | Extensió de Fitxer | Creador           |
| ---------- | ------------------ | ------------------ | ----------------- |
| JavaScript | 1995               | .js                | Brendan Eich      |
| Java       | 1995               | .java              | James Gosling     |
| PHP        | 1995               | .php               | Rasmus Lerdorf    |
| C++        | 1985               | .cpp               | Bjarne Stroustrup |

Observa les capçaleres aquí. Són simplement les claus dels objectes a l'array, convertides de camel case a title case. A part de la capçalera de la taula, cada fila successiva representa un element de l'array.

En aquest exercici has de definir una funció que accepta dos arguments: el primer és l'array per utilitzar per crear una taula, mentre que el segon argument és un node de l'element on volem inserir la taula creada.

Així podria començar la teva funció:

```javascript
function tableCreator(dataArray, targetElement) {
  // Crea els elements de la taula
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');

  ...
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));
```

### Ex6 - Esdeveniments de teclat

### Instruccions:

1. Crea un fitxer HTML amb una estructura bàsica i afegix els següents elements:

   - Una caixa (div) que actuarà com a "escenari" o "escenari de joc".
   - Una pilota (div) dins de l'escenari.
   - Un botó que l'usuari pot clicar per iniciar la interacció.

2. Importa el fitxer JavaScript on es troba la funció `moveBall`.

3. Utilitza la funció `moveBall` per permetre que la pilota es mogui en resposta a les tecles de fletxa dins de l'escenari. La pilota no ha de sortir dels límits de l'escenari.

4. Vincula la funció `moveBall` a l'esdeveniment clic del botó per iniciar la interacció.

### Ajuda:

- Pots utilitzar els estils CSS per donar una aparença visual a la teva pàgina.
- Assegura't que tot el teu codi estigui contingut dins de la funció `moveBall` per garantir que es pugui cridar correctament.

Amb aquest desafiament, podràs posar a prova les teves habilitats en la manipulació del DOM i les interaccions d'usuari mitjançant JavaScript. ¡Diverteix-te resolent aquest desafiament interactiu!

Pots veure una demo en la següent imatge:

![Demo](/assets/pilota.gif)

### Ex7 - Filtre de Cerca

Genera un array amb el nom de diferents imatges que tinguis al teu projecte. Mostra aquestes imatges en una pàgina web. Afegeix un input de text i un botó per filtrar les imatges per nom. Si l'usuari escriu "gat", només es mostraran les imatges que continguin la paraula "gat" al seu nom o a l'atribut `alt`. Demo:

![Demo](/assets/filtre.gif)

Tens a disposició un script `image_fetch.js` que et permetrà fer una crida a l'API d'Unsplash per obtenir imatges aleatòries. T'hauràs de crear un compte per obtenir una clau d'accés a l'API. Pots trobar més informació a la [documentació](https://unsplash.com/documentation).
