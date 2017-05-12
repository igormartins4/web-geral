# Blog Assombrado

Um blog sobre o desconhecido.

## Atividade

Você deve fazer algumas partes que faltam do blog assombrado.

![O resultado final da prática](resultado.jpg)


## Exercício 1: _tags_ semânticas

Converta as `<div>` e `<span>` nas _tags_ semânticas mais adequadas,
**se houver**

- **Pode ser que não exista uma _tag_ semântica** em alguns casos - aí
  continua sendo `<div>` ou `<span>` mesmo
- Veja as [_tags_ semânticas nos slides][tags-semanticas]

## Exercício 2: menu horizontal

Torne horizontal a lista com o menu principal. Faça de forma que o menu
fique semelhante ao da imagem final (lá em cima). Veja como
[transformar uma lista não ordenada em uma lista horizontal][lista-horizontal].

Você vai precisar usar a propriedade `display`.
[Veja como nos slides][propriedade-display].

## Exercício 3: "Novidade!"

Usando pseudo-elementos ([slides][pseudo-coisas]), faça com que toda
postagem que possui a classe `.novidade` tenha o texto "Novidade!"
imediatamente antes do seu conteúdo (como na imagem lá em cima). Use
sua criatividade para estilizar de uma forma bonita e legal.

## Exercício 3: seleção de texto

Repare que, ao selecionar o texto que está no cabeçalho ou
no rodapé, não dá pra enxergar direito que parte
está selecionada, porque o fundo desses caras é escuro.

Usando pseudo-elementos _again_ ([slides][pseudo-coisas]),
estilize as seleções - no cabeçalho, no rodapé e em
`#tags` - de forma que elas fiquem bem visíveis.

## FAQ

1. Toda hora tenho que assistir o vídeo?? Sacanagem, né?!
   - No arquivo `index.html`, ao final do `<body>...</body>` há um pequeno
     código JavaScript que faz o vídeo sumir e o conteúdo principal aparecer
   - Altere o tempo (de 11s) para algo menor
1. Mudei umas _tags_ de `<div>` para semântica e, de repente, o conteúdo
   principal da página sumiu. Por quê?
   - Isso aconteceu por causa do pequeno código JavaScript que tem ao final
     `<body>`.
   - Veja algumas linhas do arquivo `index.html`:
     ```html
     <script>
       // faz o vídeo desaparecer de leve assim que terminar
       let tempo = 11000;  // 11s, duração do vídeo
       setTimeout(() => {
         // linha A:
         document.getElementsByClassName('backdrop')[0].classList.add('desaparecido')
         // linha B:
         document.getElementById('conteudo-principal').classList.remove('desaparecido')
       }, tempo);
     </script>
     ```
     - A "linha B" vai dar erro se não existir um elemento na página com um
       `id="conteudo-principal"`
       - Se você tiver removido o `id` desse elemento, uma opção é colocá-lo
         de volta
       - Outra opção é alterar a "linha B" para selecionar o elemento que tinha
         o `id="conteudo-principal"` a partir do nome de sua _tag_
         - Para isso, você pode usar o comando em JavaScript:
           ```js
           // linha B
           document.getElementsByTagName('COLOQUE_A_TAG_AQUI')[0].classList.remove('desaparecido');
           ```


[tags-semanticas]: https://fegemo.github.io/cefet-front-end/classes/html5/#elementos-semanticos
[lista-horizontal]: https://fegemo.github.io/cefet-front-end/classes/html5/#elementos-semanticos
[propriedade-display]: https://fegemo.github.io/cefet-front-end/classes/html5/#a-propriedade-display
[pseudo-coisas]: https://fegemo.github.io/cefet-front-end/classes/html5/#pseudo-classes-e-pseudo-elements
