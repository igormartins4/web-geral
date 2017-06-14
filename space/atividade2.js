// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;
// ...

let imgSlideEl = document.querySelector('#slide');
let proxEl = document.querySelector('#proximo');
let antEl = document.querySelector('#anterior');

antEl.addEventListener('click', function(e) {
  indiceDaFotoCorrente--;
  if(indiceDaFotoCorrente < 0) {
    indiceDaFotoCorrente = 4;
  }
  imgSlideEl.src = servidorDasImagens + nomesDasImagens[indiceDaFotoCorrente];
});

proxEl.addEventListener('click', function(e) {
  indiceDaFotoCorrente++;
  if(indiceDaFotoCorrente > 4) {
    indiceDaFotoCorrente = 0;
  }
  imgSlideEl.src = servidorDasImagens + nomesDasImagens[indiceDaFotoCorrente];
});
