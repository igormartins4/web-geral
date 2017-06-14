let botaoEl = document.querySelector('#resolver-button');

function mostramensagem() {
  window.alert('Exibindo delta e raízes da equação');
  calculo();
}
botaoEl.addEventListener('click', mostramensagem);

function calculo() {
  let coefiA = document.querySelector('#coeficiente-a').value;

  let coefiB = document.querySelector('#coeficiente-b').value;

  let coefiC = document.querySelector('#coeficientes-c').value;

  let resuldelta = Math.pow(coefiB , 2) - ((4 * coefiA)*coefiC);
  document.querySelector('#resultado-delta').value = resuldelta;

    if (resuldelta => 0) {
      let deltaraiz = Math.sqrt(resuldelta);
      let resulx1 = ((-coefiB +  deltaraiz)  /(2 * coefiA));
      document.querySelector('#resultado-x1').value = resulx1;

      let resulx2 = ((-coefiB -  deltaraiz)  /(2 * coefiA));
      document.querySelector('#resultado-x2').value = resulx2;
    }

    else {
      let resulx1 = (-coefiB + (Math.sqrt(resuldelta))) / (2 * coefiA);
      document.querySelector('#resultado-x1').value = ' ';

      let resulx2 = (-coefiB - (Math.sqrt(resuldelta))) / (2 * coefiA);
      document.querySelector('#resultado-x2').value = ' ';
    }
}
