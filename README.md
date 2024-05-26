# Uniesp: Front end III
Repositório dedicado a disciplina front end III da Uniesp, no qual foi utilizado a Biblioteca **React** 

## Aula 00:
### Tema abordado:
- Conceitos de Node.js
- Gerenciamento de pacotes com o ***npm***
- Criação de um projeto react com a ferramenta ***vite***

### Exercicio:
Exibir renderizado a mensagem: ***"Hello World"***

## Aula 01:
### Tema abordado:
- Conceitos do **.jsx**
- Criação de componentes
- trabalhando com propriedades de componentes

### Exercicio:
Criar os componentes ***Adicao***, ***Subtracao***, ***Multiplicacao*** e ***Divisao*** repassar os operadores como parametros e renderizar os respectivos resultados

## Aula 02:
### Tema Abordado:
- Eventos
- Imagens
- Hooks

### Exercicios
#### Excercicio 1:
Crie um componente chamado:**RenderizandoComFuncoes**
- Neste componente crie uma função chamada: **escolhaDeRenderizacao** que terá um parâmetro chamado: ***oQueRenderizar***
- Nesta função, se o valor de ***oQueRenderizar*** for a string **“h1”**, terá como retorno um JSX com o texto **“Texto em h1”** envolto pela tag h1.
- Se a string for diferente de **“h1”**, o retorno será: **“Texto em h2”** envolto pela tag h2.
- Na tela chame essa função através de duas template expressions, uma passando como parâmetro “h1” e outra “h2”.

#### Exercicio 2:
Crie um componente chamado: **TrabalhandoComImagens**
- Neste componente importe uma imagem da pasta *public* e uma de *assets*
- Importe o componente na App e renderize

#### Exercicio 3:
Crie um componente chamado: **HookContador**
- Neste componente terá um *useState* **"contador"** com estado inicial = **1**
- Crie uma função **"incrementarContador"** que altera o valor do contador em +1
- Crie um button "Incrementar" para utilizar a função
- Renderize

## Aula 03:
### Tema Abordado:
- If/ Else no JSX
- Props e Destructuring props
- Reaproveitamento de componentes
- Fragments

### Exercicios:
#### Exercicio 01:
Crie um componente chamado: **EstouConseguindoAprenderReact**
- Neste componente crie um operador ternário para verificar uma props chamada **estouConseguindo** (boolean)
- Se True => <h1>Estou indo bem... </h1>
- Se False => <h1>Preciso Estudar mais </h1>

#### Exercicio 02:
Crie um componente chamado: **Aluno** 
- Este componente vai renderizar informaçoes sobre o aluno como *nome*,*email* e *curso*
- Utilise a tecnica de **Destructuring** para extrair todas as propriedades de uma vez só
- Renderize