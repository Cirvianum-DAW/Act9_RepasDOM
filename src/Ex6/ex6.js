const d = document;
let x = 0;
let y = 0;

function moveBall(e, ball, stage) {
  const ballElement = d.querySelector(ball);
  const stageElement = d.querySelector(stage);
  // getBoundingClientRect ens retorna un objecte amb les dimensions de l'element
  // Obtenim les de la bola i les del stage per poder comparar-les
  const limitBall = ballElement.getBoundingClientRect();
  const limitStage = stageElement.getBoundingClientRect();
  // console.log(e.key)
  // console.log(e.keyCode)
  console.log(limitBall, limitStage);
  switch (e.keyCode) {
    case 37:
      // Fem servir preventDefault per evitar que la bola es mogui en altres direccions
      e.preventDefault();
      // if (limitBall.left > limitStage.left) x--;
      // break;
      // Podem filar més prim i evitar que sobresurti de la pantalla.
      if (limitBall.left >= limitStage.left + 10) x--;
      break;

    case 38:
      e.preventDefault();
      if (limitBall.top > limitStage.top) y--;
      break;

    case 39:
      e.preventDefault();
      // if (limitBall.right < limitStage.right) x++;
      if (limitBall.right <= limitStage.right - 10) x++;
      break;

    case 40:
      e.preventDefault();
      if (limitBall.bottom < limitStage.bottom) y++;
      break;

    default:
      break;
  }
  // Per moure la bola, utilitzarem la propietat transform de CSS Aquesta
  // propietat ens permet aplicar una transformació 2D o 3D a un element. La funció
  // translate rep dos paràmetres, x i y, que indiquen la quantitat de píxels
  // que volem moure l'element --> https://developer.mozilla.org/en-US/docs/Web/CSS/transform

  ballElement.style.transform = `translate(${x * 10}px,${y * 10}px)`;
  // recorda que també podem afegir estils de la següent manera:
  // ballElement.setAttribute('style', `transform: translate(${x * 10}px,${y * 10}px)`);
}

document.addEventListener('keydown', (e) => moveBall(e, '#ball', '#stage'));

// Source https://roddevwork.github.io/dom-exercices-javascript/
