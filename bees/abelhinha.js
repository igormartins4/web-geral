let abelhinhas = [];

function Abelhinha(tempoAtrasoParaIniciar) {
  this.el = document.createElement('img');
  this.el.src = 'imgs/abelha-voadora.gif';
  this.el.style.width = '10px';
  this.el.style.position = 'absolute';

  this.el = document.body.appendChild(this.el);

  this.posiciona(tempoAtrasoParaIniciar);
}

Abelhinha.prototype.remove = function() {
  document.body.removeChild(this.el);
};

Abelhinha.prototype.posiciona = function(tempoAtrasoParaIniciar) {
  this.porcentagemTrajeto = 0;
  this.xInicial = Math.random() < 2 ? -15 : window.innerWidth + 15;
  this.yInicial = Math.random() * document.body.clientHeight;
  this.xFinal = this.xInicial < 0 ? window.innerWidth + 15 : -15;
  this.yFinal = Math.random() * document.body.clientHeight;
  this.el.style.left = `${this.xInicial}px`;
  this.el.style.bottom = `${this.yInicial}px`;
  this.tempoTrajeto = 3000 + Math.random() * 3000;
  this.tempoAtrasoParaIniciar = tempoAtrasoParaIniciar || Math.random() * 7000;
};

Abelhinha.prototype.atualiza = function(delta) {
  if (this.tempoAtrasoParaIniciar >= 0) {
    this.tempoAtrasoParaIniciar -= delta;
    return;
  }
  this.porcentagemTrajeto += delta / this.tempoTrajeto;
  this.x = this.xInicial + this.porcentagemTrajeto * (this.xFinal - this.xInicial);
  this.y = this.yInicial + this.porcentagemTrajeto * (this.yFinal - this.yInicial) + Math.sin(this.porcentagemTrajeto* 4 * 3.14159) * 40;
  this.y = Math.max(this.y, 0);
  this.el.style.left = `${this.x}px`;
  this.el.style.bottom = `${this.y}px`;

  if (this.porcentagemTrajeto >= 1) {
    this.posiciona();
  }
};

let inicio = null;

function atualizaAbelhinhas(agora) {
  if (!inicio) inicio = agora;
  let delta = agora - inicio;
  for (abelhinha of abelhinhas) {
    abelhinha.atualiza(delta);
  }
  inicio = agora;
  window.requestAnimationFrame(atualizaAbelhinhas);
}
atualizaAbelhinhas(0);


document.addEventListener('keyup', function(e) {
  if (e.key === '+' || e.key === '=') {
    let novaAbelhinha = new Abelhinha(1);
    abelhinhas.push(novaAbelhinha);
  } else if (e.key === '-' || e.key === '_') {
    abelhinha = abelhinhas.pop();
    if (abelhinha) {
      abelhinha.remove();
    }
  }
});

document.body.style.overflowX = 'hidden';
abelhinhas.push(new Abelhinha());
abelhinhas.push(new Abelhinha());
abelhinhas.push(new Abelhinha());
