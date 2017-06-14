// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

let botoes = document.querySelectorAll('.botao-expandir-retrair');

for (let i=0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function(e) {
  alert('Vrau');

    for (let j = 0; j < botoes.length; j++) {
    	botoes[j].classList.remove('expandido');
    };

    let clicado = e.currentTarget,
        paragrafo = clicado.parentNode,
        char = clicado.innerHTML;

    if(char === '+') {
      clicado.innerHTML = '-';
    }
    else {
      clicado.innerHTML = '+';
    }
  paragrafo.classList.toggle('expandido');
  });
};
