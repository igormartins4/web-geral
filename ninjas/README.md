# cefet-front-end-ninjas

Duas páginas web explicando como se tornar um Ninja na vida real, com algumas
curiosidades sobre essa gente ligeira.

## Atividade

Você deve estilizar as duas páginas (arquivos `index.html` e
`curiosidades.html`) de forma a torná-las extremamente atrativos ao leitor
de páginas web exigente.

Você **tem liberdade para escolher as cores e os estilos** que melhor agradarem
aos olhos, respeitando o **bom senso** de como se espera a aparência de uma
página web (_i.e._, libere o artista dentro de você ;).

Assim, esta atividade propõe alguns **itens obrigatórios** e outros de
**sugestão** para guiar seu espírito artístico.

### Iniciando o exercício

1. [Baixe os arquivos iniciais](https://github.com/fegemo/cefet-front-end-ninjas/archive/master.zip): as imagens e as duas páginas HTML
1. Descompacte na área de trabalho
1. Renomeie a pasta para `ninjas`
1. Comece o exercício! :dash:

### Itens Obrigatórios

Aqui estão os itens que precisam ser implementados:

1. **Logomarca**
   - Reduzir o tamanho da logomarca (ela está muito grande) para `200px`
     de largura (`width`)
     - Repare que a altura será ajustada automaticamente... mas se você
       defini-la também, dependendo do valor que colocar, pode acontecer isto:

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-flattened-image.png)
       - Imagens achatadas/alongadas são um ultraje aos olhos do bom usuário
        da web
       - Portanto, basta definir apenas largura, ou altura
   - Centralizá-la (veja [FAQ](#faq))
1. **Imagens e vídeos** do Youtube (elemento
   &lt;iframe ...&gt;&lt;/iframe&gt;) no corpo da página
   - Quebrar linha em vez de aparecer "dentro" do parágrafo
   - Centralizar
1. **Títulos** da página (`<h1>` e `<h2>`)
   - Usar outra fonte, que não seja a padrão
     - Veja no [FAQ](#faq) como ver que fontes estão disponíveis no
       seu computador
1. **Hiperlinks**
   - Estilize os hiperlinks em seus 4 estados diferentes (veja [FAQ](#faq))
     - Sugestão: variar as propriedades `color` e/ou
       `text-decoration: underline` (sublinhado) e `text-decoration: none`
       (sem sublinhado)
1. **Links externos**
   - Coloque uma imagem de um de globo (`img/globo.png`) à esquerda dos
     <u>hiperlinks que apontam para URLs externas</u>
     - _Dica 1_: você pode usar esta imagem
       (![Ícone de um globo do planeta Terra](img/globo.png)) e você
       precisará das propriedades `background-image`, `background-repeat`
       (veja [FAQ](#faq)) e `padding-left`
     - _Dica 2_: o que define um hiperlink para uma URL externa? É um elemento
       `<a ...>...</a>` que aponta (atributo `href`) para um endereço
       que começa com `http`
       - Volte nos slides sobre seletores e veja que existem os **seletores
         de atributos**, que se encaixam direitinho neste caso
1. **"Notas"** (aparecem no "passo 2 para se tornar um ninja" e nas referências)
   - Esmaeça (deixe mais "apagadinho") o texto das notas para que não
     chamem tanta atenção quanto o texto principal
1. **Número do passo** (para se tornar ninja)
   - Aumente a fonte e mude a cor e o fundo do número do passo
   - Aumente a fonte (_e.g._, `font-size: 20px`) do "nome do passo"
     - Exemplo:

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-exemplo-estilo-passo.png)

### Sugestões

Seguem algumas sugestões para melhorar o visual das páginas:

- Coloque um espaçamento (`padding` ou `margin`) na página inteira para dar um
  arejamento ao conteúdo.
- Escolha uma cor de destaque (sei lá, um roxo forte) e estilize os elementos
  `<strong></strong>` e, talvez os títulos para terem essa cor
  - É melhorar usar poucas cores, de forma consistente, do que várias cores
- Coloque uma cor de fundo (ou imagem, ou gradiente) na página que seja
  mais clara, mas contraste bem com a cor de destaque
- Use uma **fonte sem serifa** para o corpo do texto e deixe uma
  **fonte com serifa** para os títulos
  - Não é bom usar mais que 3 fontes em uma mesma página. O ideal são 2 apenas.
- Justifique (alinhamento) o texto dos parágrafos com `text-align: justify`

### Desafio

1. Crie uma regra para mostrar se alguma imagem da página está **sem o atributo `alt`**
   - Naquelas que se enquadrarem, coloque uma borda vermelha
   - Escreva um seletor que faça a detecção automaticamente (e.g., sem usar classes ou inspecionar o código)
1. Escreva um atributo alt bem descritivo para a imagem encontrada

### <abbr title="Frequently Asked Questions">FAQ</abbr>

- Centralizando uma `<img>`:

  ```css
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  ```
  - Explicação do `margin`: atribuímos uma `margin` lateral com valor
    "automático", o que faz o navegador dividir o espaço lateral igualmente em 2
  - Explicação do `display: block`: uma `<img>` é `inline` por padrão e
    elementos `inline` não são afetados por `margin` ou `padding`
- Estados de um hyperlink:
  - `a:link` - um link que nunca foi visitado
  - `a:visited` - um link que o usuário já visitou
  - `a:hover` - um link quando o mouse está em cima dele
  - `a:active` - um link no momento em que é "clicado"
- Imagem de fundo que não repete

  ```css
  body {
    background-image: url(img/nome-da-imagem.png);
    background-repeat: no-repeat;
    /*background-position: top left; */ /* este já é o valor padrão */
  }
  ```
- Que fontes estão disponíveis no meu computador?
  - No Linux **Ubuntu**: use o visualizador de fontes
    1. Aperte a tecla <kbd>Windows</kbd> (a tecla se chama <kbd>Super</kbd>,
       na verdade)
    1. Digite "_font_" (sem áspas) para buscar pelo visualizador e abra o
       visualizador

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-ubuntu-font-visualizer-1.png)
    1. Explore as fontes disponíveis

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-ubuntu-font-visualizer-2.png)
    1. Assim que escolher, pegue seu nome e crie use a propriedade CSS:
       ```css
       p {
         font-family: "Abyssinica SIL", serif;
       }
       ```
  - No **Windows**:
    1. Aperte a tecla <kbd>Windows</kbd> (a tecla se chama <kbd>Super</kbd>,
       na verdade)
    1. Digite "_font_" (sem áspas) para buscar pelo visualizador e abra o
       visualizador

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-windows-font-visualizer-1.png)
    1. Explore as fontes disponíveis

       ![](https://fegemo.github.io/cefet-front-end/images/ninjas-windows-font-visualizer-2.png)
    1. Assim que escolher, pegue seu nome e crie use a propriedade CSS:
       ```css
       p {
         font-family: "Calibri", serif;
       }
       ```
