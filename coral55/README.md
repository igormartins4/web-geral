# cefet-front-end-coral-55

Um cardápio das gostosuras marítimas servidas na Lanchonete do Coral 55.

## Atividade

Você deve estilizar a página do cardápio (arquivo `index.html`) de forma a
implementar o _comprehensive layout_ criado por um _designer_ (arquivo
`coral55-comp.png`). Você deve usar a especificação do _layout_ (arquivo
`coral55-specs.png`).

### Diretrizes do Exercício

Aqui estão os itens que precisam ser implementados:

1. Para o título principal da página, use a fonte "Ravie", que está inclusa
   no projeto, dentro da pasta `fonts` e já incluída pelo `estilos.css`.
1. Estude qual o melhor seletor CSS para cada situação.
1. Use espaçamento (vertical) duplo (_i.e._, propriedade `line-height`) para
   os itens do cardápio.
   - Veja o [slide sobre `line-height`][line-height]
1. Inclua o `<script></script>` `js/bubbles.js`. Veja no [FAQ](#faq).
1. Lembre-se de como funciona o _box-model_ na hora de definir as dimensões
   dos elementos.
1. Lembre-se de que elementos posicionados de forma `absolute` têm seu como
   seu sistema de coordenadas o **seu ancestral mais próximo que esteja com
   posicionamento não-estático** (_i.e._, `position: [absolute, relative,
   fixed]`).
   - Tipicamente colocamos `position: relative;` no elemento pai de um elemento
     com `position: absolute;` para servir de sistema de referência.
1. Lembre-se também que um elemento com `position: absolute` ou
   `position: fixed` é removido do fluxo e deixa de ocupar espaço.
1. Algumas cores usadas possuem transparência. Veja no slide da aula dos piratas sobre [cores transparentes][cores-transparentes]


### Roteiro

Minha sugestão é escolher cada parte da página para estilizar. Eu fiz na
seguinte ordem:

1. Estilização do recipiente geral da página (`#recipiente`) - [como ficou][passo1]
1. Estilização do cabeçalho (`header`) - [como ficou][passo2]
1. Estilização da seção lateral (`#lateral`) - [como ficou][passo3]
   - Esta é a parte mais demorada da atividade prática
   - Além de estilizar essa seção, também tirei `#cardapio` de baixo dela
1. Estilização do cardápio (`#cardapio`) - [como ficou][passo4]
1. Estilização do rodapé (`footer`) - [como ficou][passo5]
1. Estilização do _ticket_ (`#ticket`) - [como ficou][passo6]

[passo1]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo1.png
[passo2]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo2.png
[passo3]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo3.png
[passo4]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo4.png
[passo5]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo5.png
[passo6]: https://github.com/fegemo/cefet-front-end-coral-55/raw/master/roteiro/passo6.png

### <abbr title="Frequently Asked Questions">FAQ</abbr>

- Para rotacionar um elemento no sentido horário:
  ```css
  #elemento {
    transform: rotate(45deg); /* dado em graus, sentido horário */
  }
  ```
  - Encontre qual o ângulo de rotação do título `<h2>Cardápio</h2>`
    - Obs: é possível colocar um ângulo negativo
  - Além de girá-lo, será necessário também posicioná-lo para que ele fique
    próximo, mas abaixo do siri.
- Para fazer uma **transição suave da posição** `left` de um elemento, usamos
  a propriedade `transition`:
  ```css
  #elemento {
    /* ... */
    left: -100px;
    transition: left 100ms ease-out; /* propriedade, duração, interpolação */
  }
  #element:hover {
    left: 0;
  }
  ```
- Como centralizo na horizontal um elemento `block` que não está `absolute`?
  - Veja nos [slides sobre centralização horizontal][centralizacao-horizontal]
- Meu degradê não está funcionando... por quê?
  - Possivelmente, você está atribuindo um `linear-gradient(...)` para a
    propriedade `background-color`, mas um degradê é, para o CSS, um
    `background-image`
  - Veja no slide da aula das abelhas sobre [gradientes][gradientes]
- Para incluir um _script_ na página, coloque uma _tag_ `<script src="caminho-para-arquivo.js"></script>` no final do `<body>`, logo antes do `</body>`.



[cores-transparentes]: https://fegemo.github.io/cefet-front-end/classes/html3/#cores-transparentes
[gradientes]: https://fegemo.github.io/cefet-front-end/classes/css1/#gradientes
[centralizacao-horizontal]: https://fegemo.github.io/cefet-front-end/classes/css5/#centralizacao-horizontal
[line-height]: https://fegemo.github.io/cefet-front-end/classes/css5/#line-height
