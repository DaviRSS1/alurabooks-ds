<h1 align="center">
  Alurabooks Biblioteca
</h1>
<p align="center">
  <img src="https://img.shields.io/github/license/DaviRSS1/alurabooks-ds">
</p>
Biblioteca feita para aula do curso alura para fins de aprender mais sobre npm e bibliotecas.

#  Instalação

```sh
npm i aula-alura-davi-rss
```

Copie e cole no terminal

#  Como usar

- AbBotão

texto*: Texto que vai estar dentro do botão
tipo*: "primario" (Fundo amarelo) ou "secundario"(Fundo branco)
onClick: Função onclick

```js
import { AbBotao } from "aula-alura-davi-rss";

<AbBotao
  texto="Seu Texto"
  onClick = () => null
  tipo: primario
/> ;
```

- AbCampoTexto

label*: Texto em cima do campo
placeholder: Texto quando o campo estiver vazio
type*: "text", "email", "password" ou "date"
value*: Valor digitado dentro do campo
onChange*: (value: string) => void


```js
import { AbCampoTexto } from "aula-alura-davi-rss";

<AbCampoTexto
  label: Email
  placeholder: "Digite seu Email..."
  type: email
  onChange: (value: string) => void
/> ;
```

- AbCard

Card com qualquer coisa dentro

```js
import { AbCard } from "aula-alura-davi-rss";

<AbCard>
  <h1>Titulo card</h1>
  <p>Conteudo card</p>
</AbCard>
```

- AbGrupoOpcoes

valorPadrao: card selecionado
opcoes*: Opções com id, titulo, corpo e rodapé do grupo.
onChange: ((opcao: AbGrupoOpcao) => void)

```js
import { AbGrupoOpcoes } from "aula-alura-davi-rss";

opcoes:
[
  {
    "id": 2,
    "title": "Impresso",
    "corpo": "R$ 00,00",
    "rodape": ".pdf, .epub, .sob"
  },
  {
    "id": 3,
    "title": "Impresso + E-Book",
    "corpo": "R$ 00,00",
    "rodape": ".pdf, .epub, .sob"
  }
]

<AbGrupoOpcoes opcoes={opcoes} valorPadrao={opcao.id === 3} onChange= ((opcao: AbGrupoOpcao) => void) />
```

- AbQuantidade

Div com número e botões para adicionar ou subtrair um 

label: texto em cima dos botões
onChange: ((value: number) => void)

```js
import { AbQuantidade } from "aula-alura-davi-rss";

<AbQuantidade label="Quantidade" onChange={onChange((value: number) => void)}/>
```

- AbTags

Tag para organizar

texto: texto da tag

```js
import { AbTags } from "aula-alura-davi-rss";

<AbTags texto="Tag"/>
```

# ✔️ Tecnologias Usadas
- ``HTML``
- ``styled-components``
- ``TypeScript``
- ``React``
- ``NPM``
- 
# Autor
Davi Reghim de Salles Santana
https://www.linkedin.com/in/davi-reghim-13b995272/
